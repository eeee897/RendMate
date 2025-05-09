import React from 'react'
import { useApp } from '../context/AppContextProvider'
import AddNewItemBtn from '../ui/btns/AddNewItemBtn'
import CreateEditItemModal from '../ui/modal/CreateEditItemModal'
import Modal from '../ui/modal/Modal'
import VerificationProcessModal from '../ui/modal/VerificationProcessModal'
import VerifyModal from '../ui/modal/VerifyModal'
import MyItemsList from '../ui/MyItemsList'
import Title from '../ui/Title'

export default function MyItemsPage() {
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
            <MyItemsList />
        </section>
    )
}
