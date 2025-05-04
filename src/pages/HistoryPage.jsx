import usePageTitle from "../hooks/usePageTitle";
import CommonOperations from "../ui/operations/CommonOperations";
import HistoryTable from "../ui/tables/HistoryTable";
import Title from "../ui/Title";

export default function HistoryPage() {
    usePageTitle('History')

    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'History'} />
            <div className="flex items-center justify-end">
                <CommonOperations filterFieldValue={'history'} />
            </div>
            <HistoryTable />
        </section>
    )
}
