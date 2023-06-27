import { useMemo } from 'react'
import { ethers } from 'ethers'
import { useSigner } from 'wagmi'
import { useSelector } from 'react-redux'
import { abi } from '../abis/todoList'
import { getTimestamp } from '../utiils/time'

const useEditTodo = () => {
	const isEditForm = useSelector((state) => state.form.isEditForm)
	const data = useSelector((state) => state.form.todo)
	const { data: signer } = useSigner()
	const contract = useMemo(
		() => new ethers.Contract(process.env.REACT_APP_ADDRESS, abi, signer),
		[signer],
	)

	const editTodo = async (todo) => {
		const { id, title, description, targetTime, priority, status } = todo

		if (isEditForm && data.id === id) {
			if (title !== data.title) await contract.updateTitle(id, title)
			if (description !== data.description)
				await contract.updateDescription(id, description)
			if (targetTime !== getTimestamp(new Date(data.targetTime)))
				await contract.updateTargetTime(id, targetTime)
			if (priority !== data.priority)
				await contract.updatePriority(id, priority)
			if (status !== data.status) await contract.toggleStatus(id)
		}
	}

	return { editTodo }
}

export default useEditTodo
