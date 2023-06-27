import React, { useEffect, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import Datepicker from 'react-tailwindcss-datepicker'
import { useSelector } from 'react-redux'
import useEditTodo from '../hooks/useEditTodo'
import { getTimestamp } from '../utiils/time'
import { useAddTodo } from '../hooks'

const Form = () => {
	const [id, setId] = useState(0)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [priority, setPriority] = useState(0)
	const [status, setStatus] = useState(true)
	const [targetDate, setTargetDate] = useState({
		startDate: null,
		endDate: null,
	})

	const isEditForm = useSelector((state) => state.form.isEditForm)
	const data = useSelector((state) => state.form.todo)
	const { editTodo } = useEditTodo()
	const { addTodo } = useAddTodo()

	const handleValueChange = (newValue) => {
		// console.log('old target date ', targetDate)
		// console.log('target date change', newValue)
		setTargetDate(newValue)
	}

	const handleSubmit = () => {
		let date = new Date(targetDate.startDate)
		// console.log(`${isEditForm ? 'edit ' : 'create '} ${targetDate.startDate}`)
		let targetTime = getTimestamp(date)
		// console.log('targetTime', targetTime)
		let todo = { id, title, description, targetTime, priority, status }
		// console.log(todo)
		if (isEditForm) editTodo(todo)
		else addTodo(title, description, targetTime, priority)
	}

	useEffect(() => {
		setId(data.id)
		setTitle(data.title)
		setDescription(data.description)
		setPriority(data.priority)
		setTargetDate({
			startDate: data.targetTime !== null ? new Date(data.targetTime) : null,
			endDate: data.targetTime !== null ? new Date(data.targetTime) : null,
		})
		setStatus(data.status)
		// console.log(data.targetTime)
	}, [isEditForm, data])

	return (
		<section className='p-6 relative bg-white dark:bg-gray-900'>
			<h3 className='text-lg text-center font-medium mb-4 text-gray-900 dark:text-white'>
				{isEditForm ? 'Edit Todo' : 'Create Todo'}
			</h3>

			{/* Close Button */}
			<button
				type='button'
				className='bg-white dark:bg-slate-800 hover:bg-transparent dark:hover:bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white absolute top-4 right-4  flex items-center p-2 ml-3 text-sm rounded-full outline-none'>
				<MdOutlineClose size={22} />
			</button>

			{/* Title */}
			<div className='mb-6 px-6'>
				<label
					htmlFor='title'
					className={
						'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					}>
					Title
				</label>
				<input
					type='text'
					id='title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className={
						'border border-gray-300 dark:border-gray-600 focus:ring-[3px] focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400'
					}
					placeholder='Title'
					required
				/>
			</div>

			{/* Description */}
			<div className='mb-6 px-6'>
				<label
					htmlFor='description'
					className={
						'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					}>
					Description
				</label>
				<textarea
					id='description'
					className={
						'border border-gray-300 dark:border-gray-600 focus:ring-[3px] focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400'
					}
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder='Description'
					required
					rows={8}
				/>
			</div>

			<div className='px-6 grid gap-6 mb-6 md:grid-cols-2'>
				{/* Deadline */}
				<div>
					<label
						htmlFor='priority'
						className={
							'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
						}>
						Deadline
					</label>

					<Datepicker
						asSingle={true}
						useRange={false}
						value={targetDate}
						onChange={handleValueChange}
						displayFormat={'DD/MM/YYYY'}
					/>
				</div>

				<div className='flex justify-between items-end gap-6'>
					{/* Priority */}
					<div className='flex-1'>
						<label
							htmlFor='priority'
							className={
								'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
							}>
							Priority
						</label>
						<select
							id='priority'
							className={
								'border border-gray-300 dark:border-gray-600 focus:ring-[3px] focus:ring-blue-500/20 bg-white dark:bg-slate-800 text-gray-900 dark:text-white text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400'
							}
							value={priority}
							onChange={(e) => setPriority(e.target.value)}>
							<option value='0'> Choose priority </option>
							<option value='1'> 1 </option>
							<option value='2'> 2 </option>
							<option value='3'> 3 </option>
							<option value='4'> 4 </option>
							<option value='5'> 5 </option>
						</select>
					</div>

					{/* Status */}
					{isEditForm && (
						<div>
							<label
								htmlFor='Status'
								className={
									'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
								}>
								Status
							</label>

							<div
								className='md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer'
								onClick={() => setStatus((prev) => !prev)}>
								<div
									className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform  ${
										status ? '' : 'transform translate-x-5'
									}`}
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Submit Button */}
			<div className='px-6 flex items-center justify-center'>
				<button
					type='submit'
					onClick={handleSubmit}
					className='text-white px-8 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-2 focus: focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Submit
				</button>
			</div>
		</section>
	)
}

export default Form
