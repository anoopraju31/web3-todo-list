import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount } from 'wagmi'

const Login = () => {
	const navigate = useNavigate()
	const { isConnected } = useAccount()

	useEffect(() => {
		if (isConnected) navigate('/')
	}, [isConnected, navigate])

	return (
		<div className='pt-20 px-0 md:px-8 min-h-[var(--body-height)] bg-white dark:bg-gray-900 '></div>
	)
}

export default Login
