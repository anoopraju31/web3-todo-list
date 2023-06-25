import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useSigner } from 'wagmi'

const Login = () => {
	const navigate = useNavigate()
	const { isConnected } = useAccount()
	const { data: signer } = useSigner()

	useEffect(() => {
		if (isConnected) navigate('/')
	}, [signer])

	return <div>Login</div>
}

export default Login
