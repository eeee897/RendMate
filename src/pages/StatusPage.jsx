import StatusOperations from '../ui/operations/StatusOperations'
import StatusTable from '../ui/tables/StatusTable'
import Title from '../ui/Title'

export default function StatusPage() {
    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'Status'} />
            <div className='flex justify-end items-center'>
                {/* <StatusOperations /> */}
            </div>
            <StatusTable />
        </section>
    )
}
