import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAccount, useSigner } from 'wagmi'

const Home = () => {
	const navigate = useNavigate()
	const { isConnected } = useAccount()
	const { data: signer } = useSigner()

	useEffect(() => {
		if (!isConnected) navigate('/connect')
	}, [signer])

	return <div className='mt-32'>Home</div>
}

export default Home
