import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useSigner } from 'wagmi'
import useTodo from '../hooks/useTodo'
import { Card } from '../components'

const Home = () => {
	const navigate = useNavigate()
	const { isConnected } = useAccount()
	const { data: signer } = useSigner()
	const todos = useTodo()

	useEffect(() => {
		if (!isConnected) navigate('/connect')
	}, [signer])

	return (
		<div className='pt-20 px-0 md:px-8 min-h-screen bg-white dark:bg-gray-900 '>
			<div className='max-w-screen-2xl mx-auto py-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{todos?.map((todo) => (
					<Card
						key={todo.createdTime._hex}
						title={todo.title}
						description={todo.description}
						createdTime={Number(todo.createdTime._hex)}
						targetTime={Number(todo.targetTime._hex)}
						priority={todo.priority}
					/>
				))}
			</div>
		</div>
	)
}

export default Home
