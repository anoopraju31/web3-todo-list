import { useMemo } from 'react'
import { ethers } from 'ethers'
import { useSigner } from 'wagmi'
import { abi } from '../abis/todoList'

const useAddTodo = () => {
	const { data: signer } = useSigner()
	const contract = useMemo(
		() => new ethers.Contract(process.env.REACT_APP_ADDRESS, abi, signer),
		[signer],
	)

	const addTodo = async (title, description, targetTime, priority) => {
		await contract.createTodo(title, description, targetTime, priority)
	}

	return { addTodo }
}

export default useAddTodo
