import React from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { cardBackground } from '../utiils/cardBackground'
import { addTodoToEdit, switchToEditForm } from '../features/formSlice'

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
	const create = `${createDate.getDate()}/${
		createDate.getMonth() + 1
	}/${createDate.getFullYear()}`
	const target = `${targetDate.getDate()}/${
		targetDate.getMonth() + 1
	}/${targetDate.getFullYear()}`
	const dispatch = useDispatch()

	const handleEdit = () => {
		// console.log('handle edit')
		dispatch(switchToEditForm())
		dispatch(
			addTodoToEdit({
				id,
				title,
				description,
				targetTime: targetDate,
				priority,
				status,
			}),
		)
	}

	return (
		<div
			className={`relative w-full p-4  border border-gray-200 rounded shadow  dark:border-gray-700 ${
				cardBackground[priority - 1]
			}`}>
			<div
				className='p-2 absolute top-2 right-2 flex items-center justify-center round_border text-white hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
				onClick={handleEdit}>
				<FaRegEdit size={18} />
			</div>
			<h5 className='mb-2 w-[80%] font-mono font-medium tracking-tighter text-gray-100 dark:text-white'>
				{title}
			</h5>
			<p className='mb-3 font-mono text-sm  leading-5 text-gray-300 dark:text-gray-400'>
				{description}
			</p>
			<div className='flex gap-3'>
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
