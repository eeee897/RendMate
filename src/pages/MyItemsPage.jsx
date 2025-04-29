import React from 'react'
import Modal from '../ui/modal/Modal'
import { Plus } from 'lucide-react'
import CreateEditItemModal from '../ui/modal/CreateEditItemModal'
import ItemsList from '../ui/ItemsList'
import { items } from '@/utils/constants'

export default function MyItemsPage() {
    const owenerItem = items.filter(item => item.ownerId)

    return (
        <section className='flex flex-col gap-2'>
            <h1 className='title'>My Items</h1>
            <div className='flex items-center justify-end gap-2'>
                <Modal>
                    <Modal.Opens open={'create-modal'}>
                        <button className='flex items-center gap-2 px-4 p-2.5 bg-primary rounded-full hover:bg-cyan-500 cursor-pointer transition duration-300 text-white'>
                            <Plus /> <span className='text-white font-bold'>Add new Item</span>
                        </button>
                    </Modal.Opens>

                    <Modal.Window name={'create-modal'}>
                        <CreateEditItemModal />
                    </Modal.Window>
                </Modal>
            </div>
            <ItemsList items={owenerItem} />
        </section>
    )
}
