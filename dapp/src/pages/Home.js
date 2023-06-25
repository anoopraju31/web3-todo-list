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
		<div className='mt-20 min-h-screen bg-white dark:bg-gray-900 '>
			{todos?.map((todo) => (
				<Card
					title={todo.title}
					description={todo.description}
					createdTime={Number(todo.createdTime._hex)}
					targetTime={Number(todo.targetTime._hex)}
				/>
			))}
		</div>
	)
}

export default Home
