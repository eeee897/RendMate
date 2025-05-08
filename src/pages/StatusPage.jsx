import usePageTitle from '../hooks/usePageTitle'
import StatusTable from '../ui/tables/StatusTable'
import Title from '../ui/Title'

export default function StatusPage() {
    usePageTitle('Status')

    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'Status'} />
            <StatusTable />
        </section>
    )
}
