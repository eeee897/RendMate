import usePageTitle from "../hooks/usePageTitle";
import HistoryTable from "../ui/tables/HistoryTable";
import Title from "../ui/Title";

export default function HistoryPage() {
    usePageTitle('History')

    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'History'} />
            <HistoryTable />
        </section>
    )
}
