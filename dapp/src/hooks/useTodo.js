import { useEffect, useMemo, useState } from 'react'
import { ethers } from 'ethers'
import { useSigner, useContractEvent } from 'wagmi'
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
		// console.log('data', data)
		setTodos(data)
	}

	useContractEvent({
		address: process.env.REACT_APP_ADDRESS,
		abi,
		eventName: 'TodoCreate',
		listener(log) {
			// console.log(log)
			setTimeout(getTodos, 15000)
		},
	})

	useContractEvent({
		address: process.env.REACT_APP_ADDRESS,
		abi,
		eventName: 'TitleUpdate',
		listener(log) {
			// console.log(log)
			setTimeout(getTodos, 15000)
		},
	})

	useContractEvent({
		address: process.env.REACT_APP_ADDRESS,
		abi,
		eventName: 'DescriptionUpdate',
		listener(log) {
			// console.log(log)
			setTimeout(getTodos, 15000)
		},
	})

	useContractEvent({
		address: process.env.REACT_APP_ADDRESS,
		abi,
		eventName: 'TargetTimeUpdate',
		listener(log) {
			// console.log(log)
			setTimeout(getTodos, 15000)
		},
	})

	useContractEvent({
		address: process.env.REACT_APP_ADDRESS,
		abi,
		eventName: 'PriorityUpdate',
		listener(log) {
			// console.log(log)
			setTimeout(getTodos, 15000)
		},
	})

	useContractEvent({
		address: process.env.REACT_APP_ADDRESS,
		abi,
		eventName: 'StatusToggle',
		listener(log) {
			// console.log(log)
			setTimeout(getTodos, 15000)
		},
	})

	useEffect(() => {
		if (signer) getTodos()
		else setTodos([])
	}, [signer])

	return todos
}

export default useTodo
