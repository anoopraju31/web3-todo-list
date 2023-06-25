import { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'
import { useSigner } from 'wagmi'
import { abi } from '../abis/todoList'

const useTodo = () => {
	const [todos, setTodos] = useState([])
	const { data: signer } = useSigner()
	const contract = useMemo(
		() => new ethers.Contract(process.env.REACT_APP_ADDRESS, abi, signer),
		[signer],
	)

	const getTodos = async () => {
		const data = await contract.getTodos()
		setTodos(data)
	}

	useEffect(() => {
		if (signer) getTodos()
		else setTodos([])
	}, [signer])

	return todos
}

export default useTodo
