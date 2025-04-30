import Filter from "../filter/Filter";

export default function StatusOperations() {
    return (
        <div className="flex gap-2 md:flex-row md:items-center flex-col w-fit">
            <Filter
                filterField='status'
                options={[
                    { value: 'lend', label: 'Requests Recieved' },
                    { value: 'rent', label: 'My Rentals' },
                ]}
            />
        </div>
    )
}
