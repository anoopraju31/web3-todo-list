import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

import { cardBackground } from '../utiils/cardBackground'
import {
	addTodoToEdit,
	switchToEditForm,
	toggleModel,
	toggleCardView,
} from '../features/formSlice'
import { getTimestamp } from '../utiils/time'

const Card = ({
	id,
	title,
	description,
	createdTime,
	targetTime,
	priority,
	status,
}) => {
	const createDate = new Date(createdTime * 1000)
	const targetDate = new Date(targetTime * 1000)

	const create = `
		${createDate.getDate()}/
		${createDate.getMonth() + 1}/
		${createDate.getFullYear()}
	`
	const target = `
		${targetDate.getMonth() + 1}/
		${targetDate.getDate()}/
		${targetDate.getFullYear()}
	`

	const dispatch = useDispatch()
	const cardView = useSelector((state) => state.form.cardView)

	// functtion to open edit form
	const handleEdit = () => {
		dispatch(switchToEditForm())

		if (!cardView) {
			dispatch(
				addTodoToEdit({
					id,
					title,
					description,
					createdTime,
					targetTime: target,
					priority,
					status,
				}),
			)
			dispatch(toggleModel(true))
		}

		if (cardView) dispatch(toggleCardView(false))
	}

	// function to view the todo card fully
	const handleView = () => {
		dispatch(
			addTodoToEdit({
				id,
				title,
				description,
				createdTime: getTimestamp(createDate),
				targetTime: getTimestamp(targetDate),
				priority,
				status,
			}),
		)
		dispatch(toggleModel(true))
		dispatch(toggleCardView(true))
	}

	// function to close the todo card
	const handleClose = () => {
		// console.log('handle close')

		dispatch(
			addTodoToEdit({
				id: 0,
				title: '',
				description: '',
				priority: 0,
				createdTime: null,
				targetTime: null,
				status: true,
			}),
		)
		dispatch(toggleModel(false))
		dispatch(toggleCardView(false))
	}

	return (
		<div
			className={`relative w-full h-full p-4  border border-gray-200 rounded shadow  dark:border-gray-700 ${
				cardBackground[priority - 1]
			} ${status && 'line-through'}`}>
			<div
				className='p-2 absolute top-2 cursor-pointer right-2 flex items-center justify-center rounded-full text-white hover:text-black focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
				onClick={handleEdit}>
				<FaRegEdit size={18} />
			</div>

			{cardView && (
				<div
					className='p-2 absolute top-2 cursor-pointer right-10 flex items-center justify-center rounded-full text-white hover:text-black focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
					onClick={handleClose}>
					<MdOutlineClose size={22} />
				</div>
			)}

			<h5
				onClick={handleView}
				className='mb-2 w-[80%] cursor-pointer font-mono font-medium tracking-tighter text-gray-100 dark:text-white'>
				{title}
			</h5>

			<p
				onClick={handleView}
				className='mb-3 font-mono text-sm cursor-pointer leading-5 text-gray-300 dark:text-gray-400'>
				{description}
			</p>

			<div onClick={handleView} className='flex gap-3 cursor-pointer'>
				<p className='mb-3 font-normal text-gray-400 dark:text-gray-400'>
					{create}
				</p>
				<p className='mb-3 font-normal text-gray-400 dark:text-gray-400'>
					{target}
				</p>
			</div>
		</div>
	)
}

export default Card
