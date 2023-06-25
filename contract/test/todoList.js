const { expect } = require('chai')
const { ethers } = require('hardhat')
const todos = require('../utills/todo.js')

describe('Todo List Smart Contract', () => {
	let user1, todoList

	before(async () => {
		;[user1] = await ethers.getSigners()
		const TodoList = await ethers.getContractFactory('TodoList')
		todoList = await TodoList.deploy()
	})

	describe('Create Todo', () => {
		it('Should emit TodoCreate event', async () => {
			const { title, description, targetTime, priority } = todos[0]

			await expect(
				todoList.createTodo(title, description, targetTime, priority),
			)
				.to.emit(todoList, 'TodoCreate')
				.withArgs(user1.address, 1)
		})

		it('Should return all the todos of user1', async () => {
			const todo = await todoList.getTodos()

			expect(todos[0].title).to.be.eq(todo[0].title)
			expect(todos[0].description).to.be.eq(todo[0].description)
			expect(todos[0].targetTime).to.be.eq(todo[0].targetTime)
			expect(todos[0].priority).to.be.eq(todo[0].priority)
			expect(todos[0].status).to.be.eq(todo[0].false)
		})

		it('Should return the todo count', async () => {
			const todoCount = await todoList.getTodosCount()
			expect(todoCount).to.be.eq(1)
		})
	})

	describe('Update Title', () => {
		it('Should update the title of todo', async () => {
			const updateTodoTitleTx = await todoList.updateTitle(
				0,
				'Buy groceries AJ stores',
			)

			const todo = await todoList.getTodos()

			expect(todo[0].title).to.be.eq('Buy groceries AJ stores')
		})

		it('Should emit TitleUpdate event', async () => {
			await expect(todoList.updateTitle(0, 'Buy groceries AJ stores only'))
				.to.emit(todoList, 'TitleUpdate')
				.withArgs(user1.address, 0)
		})
	})
})
