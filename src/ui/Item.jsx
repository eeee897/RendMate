import { ChatBubbleOvalLeftEllipsisIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon, CurrencyDollarIcon, CubeIcon, HandThumbUpIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/solid'
import Menus from './menu/Menus'
import ConfirmationModal from './modal/ConfirmationModal'
import CreateEditItemModal from './modal/CreateEditItemModal'
import ImagePreviewModal from './modal/ImagePreviewModal'
import Modal from './modal/Modal'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContextProvider'
import defaultImage from '@/assets/item_images/default_image.jpg'

export default function Item({ item }) {
    const { isAuthenticated } = useApp()

    return (
        <Modal>
            <div className='p-2 bg-slate-50 flex dark:text-slate-50 gap-2.5 rounded-xl border border-slate-300 dark:bg-veryDarkViolet dark:border-veryDarkBlue'>
                {/* Image */}
                <div className='w-64 bg-grayishViolet rounded-s-lg'>
                    <Modal.Opens open={'image-preview'}>
                        <img src={item.image || defaultImage} className='w-full h-full object-center cursor-pointer hover:scale-105 transition duration-300 rounded-s-lg' alt={`${item.name}_image`} />
                    </Modal.Opens>

                    <Modal.Window name={'image-preview'} padding={false}>
                        <ImagePreviewModal image={item.image || defaultImage} />
                    </Modal.Window>
                </div>
                {/* Info */}
                <div className='flex flex-col gap-2 w-full'>
                    <div className='flex items-center justify-between gap-2'>
                        <h1 className='font-bold text-start text-darkViolet dark:text-slate-50 sm:text-xl text-lg md:text-2xl'>{item.name}</h1>

                        <div className='flex items-center gap-0.5'>
                            <span className={`${item.usage === 'Available' ? 'bg-green-600' : 'bg-yellow-600'} text-[11px] md:text-xs rounded-lg px-2 py-0.5 text-white`}>{item.usage}</span>
                            {item.ownerId && <Menus.Toggle id={item.id} />}

                            <Menus.List id={item.id}>
                                <Modal.Opens open='edit-form'>
                                    <Menus.Button icon={<PencilSquareIcon className="text-blue-500 w-4 h-4" />}>Edit</Menus.Button>
                                </Modal.Opens>

                                <Modal.Opens open='delete'>
                                    <Menus.Button icon={<TrashIcon className="text-red-500 w-4 h-4" />}>Delete</Menus.Button>
                                </Modal.Opens>
                            </Menus.List>

                            {/* Edit Form */}
                            <Modal.Window name='edit-form'>
                                <CreateEditItemModal itemToEdit={item} />
                            </Modal.Window>

                            {/* Delete Form */}
                            <Modal.Window name='delete' width='450px' padding={false}>
                                <ConfirmationModal name={item.name} type={'delete'} itemId={item.id} />
                            </Modal.Window>
                        </div>
                    </div>
                    <p className='text-[11px] text-start md:text-xs italic dark:text-grayishViolet font-thin text-gray-500'>"{item.description}"</p>
                    <div className='flex items-center gap-2'>
                        <CurrencyDollarIcon className='w-5 lg:w-7 text-yellow-600' />
                        <p className='lg:text-xl truncate text-start text-lg font-bold text-darkViolet dark:text-slate-50'>{item.rentalPrice} THB per day</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <HandThumbUpIcon className='w-5 text-blue-500' />
                        <p className='text-[11px] md:text-xs'>
                            ExtrasIncluded: {item.extras ? item.extras.map(access => access).join(', ') : '-'}
                        </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BanknotesIcon className="w-5 text-green-500" />
                        <p className='text-[11px] md:text-xs'>Deposit: <span className='font-bold'>{item.deposit}</span> THB</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MapPinIcon className='w-5 text-red-600' />
                        <p className='text-[11px] md:text-xs'>Location: {item.location}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <StarIcon className='w-5 text-yellow-500' />
                        <p className='text-[11px] md:text-xs'>Rating: {item.rating}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CubeIcon className='w-5 text-yellow-600' />
                        <p className='text-[11px] md:text-xs'>Condition: {item.condition}</p>
                    </div>
                    <div className='flex items-center justify-end gap-2'>

                        {item.ownerId ?
                            <>
                                <Modal.Opens open={item.status === 'Normal' ? 'disabled' : 'un-disabled'}>
                                    <button className='px-4 p-1.5 bg-red-600 rounded-full text-sm hover:bg-red-700 border-b-[3px] border-b-red-800 font-bold cursor-pointer text-white hover:border-b-0 hover:border-t-[3px] hover:border-t-red-700'>
                                        {item.status === 'Normal' ? 'Disable' : 'Undisable'}
                                    </button>
                                </Modal.Opens>
                                <Modal.Window name={'disabled'}>
                                    <ConfirmationModal name={item.name} type={'disabled'} itemId={item.id} />
                                </Modal.Window>
                                <Modal.Window name={'un-disabled'}>
                                    <ConfirmationModal name={item.name} type={'un-disabled'} itemId={item.id} />
                                </Modal.Window>
                            </>
                            :
                            <>
                                <Link to={isAuthenticated ? '/app/chats' : '/auth'}>
                                    <ChatBubbleOvalLeftEllipsisIcon className='w-7 h-7 hover:bg-slate-300 text-darkViolet dark:bg-grayishViolet transition duration-200 p-1.5 bg-slate-200 rounded-full cursor-pointer' />
                                </Link>
                                <Link to={isAuthenticated ? '/app/status' : '/auth'} className='px-4 p-1.5 bg-primary rounded-full text-sm hover:bg-cyan-500 border-b-[3px] border-b-cyan-800 font-bold cursor-pointer text-white hover:border-b-0 hover:border-t-[3px] hover:border-t-cyan-500'>
                                    Rent Now
                                </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
}
