import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useSigner } from 'wagmi'
import useTodo from '../hooks/useTodo'

const Home = () => {
	const navigate = useNavigate()
	const { isConnected } = useAccount()
	const { data: signer } = useSigner()
	const todos = useTodo()

	useEffect(() => {
		if (!isConnected) navigate('/connect')
	}, [signer])

	return <div className='mt-32'>{JSON.stringify(todos)}</div>
}

export default Home
