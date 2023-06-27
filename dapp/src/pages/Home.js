import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAccount } from 'wagmi'
import { useNavigate } from 'react-router-dom'
import { Modal } from 'flowbite-react'

import { useTodo } from '../hooks'
import { Card, Form } from '../components'
import { toggleModel } from '../features/formSlice'

const Home = () => {
	const navigate = useNavigate()
	const { isConnected } = useAccount()
	const todos = useTodo()
	const cardView = useSelector((state) => state.form.cardView)
	const data = useSelector((state) => state.form.todo)
	const modelOpen = useSelector((state) => state.form.modelOpen)
	const dispatch = useDispatch()

	useEffect(() => {
		// Not connected redirected to login page
		if (!isConnected) navigate('/connect')
	}, [isConnected, navigate])

	return (
		<div className='pt-20 px-0 md:px-8 min-h-screen bg-white dark:bg-gray-900 '>
			{/* Cards */}
			<div className='max-w-screen-2xl mx-auto pt-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4'>
				{todos?.map((todo) => (
					<Card
						key={todo.id}
						id={todo.id}
						title={todo.title}
						description={todo.description}
						createdTime={Number(todo.createdTime._hex)}
						targetTime={Number(todo.targetTime._hex)}
						priority={Number(todo.priority)}
						status={todo.status}
					/>
				))}
			</div>

			{/* Model */}
			<Modal
				dismissible
				className='h-screen backdrop-blur-sm '
				show={modelOpen}
				onClose={() => {
					dispatch(toggleModel(false))
				}}>
				{cardView ? <Card {...data} /> : <Form />}
			</Modal>
		</div>
	)
}

export default Home
