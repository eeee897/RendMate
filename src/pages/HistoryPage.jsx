import HistoryOperations from "../ui/operations/HistoryOperations";
import HistoryTable from "../ui/tables/HistoryTable";
import Title from "../ui/Title";

export default function HistoryPage() {
    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'History'} />
            <div className="flex items-center justify-end">
                {/* <HistoryOperations /> */}
            </div>
            <HistoryTable />
        </section>
    )
}
