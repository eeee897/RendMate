import React from 'react'
import Modal from '../ui/modal/Modal'
import CreateEditItemModal from '../ui/modal/CreateEditItemModal'
import ItemsList from '../ui/ItemsList'
import { items } from '@/utils/constants'
import AddNewItemBtn from '../ui/btns/AddNewItemBtn'
import Title from '../ui/Title'
import { useApp } from '../context/AppContextProvider'
import VerifyModal from '../ui/modal/VerifyModal'
import VerificationProcessModal from '../ui/modal/VerificationProcessModal'

export default function MyItemsPage() {
    const owenerItem = items.filter(item => item.ownerId)
    const { isVerified } = useApp()

    return (
        <section className='flex flex-col gap-2'>
            <Title text={'My Items'} />
            <div className='flex items-center justify-end gap-2'>
                <Modal>
                    <Modal.Opens open={isVerified ? 'create-modal' : 'verify-modal'}>
                        <div>
                            <AddNewItemBtn />
                        </div>
                    </Modal.Opens>

                    <Modal.Window name={'create-modal'}>
                        <CreateEditItemModal />
                    </Modal.Window>
                    <Modal.Window name={'verify-modal'}>
                        <VerifyModal />
                    </Modal.Window>
                    <Modal.Window name={'verify-start'}>
                        <VerificationProcessModal />
                    </Modal.Window>
                </Modal>
            </div>
            <ItemsList items={owenerItem} />
        </section>
    )
}
