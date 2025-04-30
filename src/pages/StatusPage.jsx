import StatusOperations from '../ui/operations/StatusOperations'
import StatusTable from '../ui/tables/StatusTable'
import Title from '../ui/Title'
import Pagination from '@/ui/paginations/Pagination'

export default function StatusPage() {
    return (
        <section className='flex flex-col gap-2 '>
            <Title text={'Status'} />
            <div className='flex justify-end items-center'>
                <StatusOperations />
            </div>
            <StatusTable />
            <Pagination count={24} />
        </section>
    )
}
