import { Plus } from 'lucide-react'
import React from 'react'
import ItemsList from '../ui/ItemsList'
import Modal from '../ui/modal/Modal'
import CreateEditItemModal from '../ui/modal/CreateEditItemModal'

export default function ItemsFeedPage() {
    return (
        <section className='flex flex-col gap-2'>
            <h1 className="title">Available Items</h1>
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
            <ItemsList />
        </section>
    )
}
