import React, { useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import Datepicker from 'react-tailwindcss-datepicker'
import { useFormType } from '../hooks'

const Form = () => {
	const [type] = useFormType()
	const [value, setValue] = useState({
		startDate: new Date(),
		endDate: new Date().setMonth(11),
	})

	const handleValueChange = (newValue) => {
		console.log('newValue:', newValue)
		setValue(newValue)
	}
	return (
		<section className='p-6 relative bg-white dark:bg-gray-900'>
			<h3 className='text-lg text-center font-medium mb-4 text-gray-900 dark:text-white'>
				{type ? 'Edit' : 'Create'}
				Todo
			</h3>

			<button
				type='button'
				className='bg-white dark:bg-slate-800 hover:bg-transparent dark:hover:bg-transparent border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white absolute top-4 right-4  flex items-center p-2 ml-3 text-sm rounded-full outline-none'
				// onClick={() => dispatch(toggleButton(false))}
			>
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
					placeholder='Description'
					required
					rows={8}
				/>
			</div>

			<div className='px-6 grid gap-6 mb-6 md:grid-cols-2'>
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
						value={value}
						onChange={handleValueChange}
					/>
				</div>
				<div>
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
						defaultValue={1}>
						<option> Choose priority </option>
						<option value='1'> 1 </option>
						<option value='2'> 2 </option>
						<option value='3'> 3 </option>
						<option value='4'> 4 </option>
						<option value='5'> 5 </option>
					</select>
				</div>
			</div>

			{/* Submit */}
			<div className='px-6 flex items-center justify-center'>
				<button
					type='submit'
					className='text-white px-8 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-2 focus: focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto  py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
					Submit
				</button>
			</div>
		</section>
	)
}

export default Form
