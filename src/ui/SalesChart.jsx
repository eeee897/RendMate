import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useTheme } from '@/context/ThemeContextProvider';

const fakeSalesData = [];
const startDate = new Date('2025-03-20T07:54:44.601Z');

for (let day = 0; day < 50; day++) {
    for (let timeIndex = 0; timeIndex < 3; timeIndex++) {
        const date = new Date(startDate);
        date.setUTCDate(startDate.getUTCDate() + day);
        date.setUTCHours(8 + timeIndex * 4);

        const timestamp = date.toISOString().replace('T', ' ').replace('Z', '+00');
        fakeSalesData.push({
            time: timestamp,
            value: Math.floor(Math.random() * 200) + 1
        });
    }
}

export default function SalesChart() {
    const [searchParams] = useSearchParams()
    const { isDark } = useTheme()

    const numDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'))

    const allDates = eachDayOfInterval({
        start: subDays(new Date(), numDays - 1),
        end: new Date()
    })

    const data = allDates.map(date => {
        return {
            label: format(date, 'MMM dd'),
            data: fakeSalesData.filter(data => isSameDay(date, new Date(data.time))).reduce((total, cur) => total + cur.value, 0),
        }
    })

    const colors = isDark
        ? {
            sales: { stroke: "#BFBFBF", fill: "#C8C8C8" },
            text: "#e5e7eb",
            background: "#18212f",
        }
        : {
            sales: { stroke: "#2ACFCF", fill: "#9AE3E3" },
            text: "#374151",
            background: "#fff",
        };

    return (
        <div className="w-full p-5 border rounded-md dark:border-veryDarkBlue bg-slate-50 border-slate-300 dark:bg-veryDarkViolet">
            <h2 className="mb-5 text-2xl font-bold dark:text-slate-50">Sales from {format(allDates.at(0), 'MMM dd yyyy')} to {format(allDates.at(-1), 'MMM dd yyyy')}</h2>
            <ResponsiveContainer height={300} width={'100%'}>
                <AreaChart data={data} >
                    <XAxis dataKey={'label'} tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
                    <YAxis tick={{ fill: colors.text }} tickLine={{ stroke: colors.text }} />
                    <CartesianGrid strokeDasharray={'4'} />
                    <Tooltip contentStyle={{ backgroundColor: colors.background, }} />
                    <Area
                        dataKey={'data'}
                        type={'monotone'}
                        strokeWidth={2}
                        unit={'฿'}
                        stroke={colors.sales.stroke}
                        fill={colors.sales.fill}
                        name="Sales"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
