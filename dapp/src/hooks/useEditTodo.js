import { useMemo } from 'react'
import { ethers } from 'ethers'
import { useSigner } from 'wagmi'
import { abi } from '../abis/todoList'

const useEditTodo = () => {
	const { data: signer } = useSigner()
	const contract = useMemo(
		() => new ethers.Contract(process.env.REACT_APP_ADDRESS, abi, signer),
		[signer],
	)

	const editTodo = async (todo) => {
		const { id, title, description, targetTime, priority, status } = todo

		if (title !== '') await contract.updateTitle(id, title)
		if (description !== '') await contract.updateDescription(id, description)
		if (targetTime !== '') await contract.updateTargetTime(id, targetTime)
		if (priority !== '') await contract.updatePriority(id, priority)
		if (status !== '') await contract.toggleStatus(id)
	}

	return { editTodo }
}

export default useEditTodo
