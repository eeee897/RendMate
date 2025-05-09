
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { useTheme } from '@/context/ThemeContextProvider';
import { useSearchParams } from "react-router-dom";

const startDataLight = [
    { duration: "1 day", value: 5, color: "#ef4444" },
    { duration: "2 days", value: 3, color: "#f97316" },
    { duration: "3 days", value: 2, color: "#eab308" },
    { duration: "4-5 days", value: 7, color: "#84cc16" },
    { duration: "6-7 days", value: 2, color: "#22c55e" },
    { duration: "8-14 days", value: 5, color: "#14b8a6" },
    { duration: "15-21 days", value: 1, color: "#3b82f6" },
    { duration: "21+ days", value: 4, color: "#a855f7" },
];

const startDataDark = [
    { duration: "1 day", value: 5, color: "#b91c1c" },
    { duration: "2 days", value: 3, color: "#c2410c" },
    { duration: "3 days", value: 2, color: "#a16207" },
    { duration: "4-5 days", value: 7, color: "#4d7c0f" },
    { duration: "6-7 days", value: 2, color: "#15803d" },
    { duration: "8-14 days", value: 5, color: "#0f766e" },
    { duration: "15-21 days", value: 1, color: "#1d4ed8" },
    { duration: "21+ days", value: 4, color: "#7e22ce" },
];

function filterDataByLastValue(data, filterValue) {
    if (filterValue === 7) {
        return data.filter(d => ["1 day", "3 days", "4-5 days"].includes(d.duration));
    }

    if (filterValue === 30) {
        return data.filter(d =>
            ["1 day", "2 days", "3 days", "4-5 days", "6-7 days", "8-14 days"].includes(d.duration)
        );
    }

    return data; // default: show all (e.g., 90 days or undefined)
}

export default function RentDurationChart() {
    const [searchParams] = useSearchParams();
    const filterValue = Number(searchParams.get('last')) || 7;

    const { isDark } = useTheme();
    const startData = isDark ? startDataDark : startDataLight;

    const filteredData = filterDataByLastValue(startData, filterValue);

    return (
        <div className="p-5 space-y-3 border rounded-md border-slate-300 bg-slate-50 dark:bg-veryDarkViolet dark:border-veryDarkBlue">
            <h2 className="text-2xl font-bold dark:text-slate-50">Rent Duration Summary</h2>
            <ResponsiveContainer width={'100%'} height={240}>
                <PieChart>
                    <Pie
                        data={filteredData}
                        nameKey={'duration'}
                        dataKey={'value'}
                        innerRadius={70}
                        outerRadius={110}
                        cx={'50%'}
                        cy={'50%'}
                        paddingAngle={3}
                    >
                        {filteredData.map(entry => (
                            <Cell key={entry.duration} fill={entry.color} stroke={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                        verticalAlign="middle"
                        align="right"
                        layout="vertical"
                        iconSize={15}
                        iconType="circle"
                        width={'30%'}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}