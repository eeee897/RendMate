import usePageTitle from '../hooks/usePageTitle'
import CommonOperations from '../ui/operations/CommonOperations'
import StatusTable from '../ui/tables/StatusTable'
import Title from '../ui/Title'

export default function StatusPage() {
    usePageTitle('Status')

    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'Status'} />
            <div className='flex justify-end items-center'>
                <CommonOperations filterFieldValue={'status'} />
            </div>
            <StatusTable />
        </section>
    )
}
