import React from 'react'
import Modal from '../ui/modal/Modal'
import CreateEditItemModal from '../ui/modal/CreateEditItemModal'
import ItemsList from '../ui/ItemsList'
import { items } from '@/utils/constants'
import AddNewItemBtn from '../ui/btns/AddNewItemBtn'
import Title from '../ui/Title'

export default function MyItemsPage() {
    const owenerItem = items.filter(item => item.ownerId)

    return (
        <section className='flex flex-col gap-2'>
            <Title text={'My Items'} />
            <div className='flex items-center justify-end gap-2'>
                <Modal>
                    <Modal.Opens open={'create-modal'}>
                        <div>
                            <AddNewItemBtn />
                        </div>
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
