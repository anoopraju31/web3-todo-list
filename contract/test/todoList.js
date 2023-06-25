const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('Todo List Smart Contract', () => {
	let user1, todoList

	before(async () => {
		;[user1] = await ethers.getSigners()
		const TodoList = await ethers.getContractFactory('TodoList')
		todoList = await TodoList.deploy()
	})
})
