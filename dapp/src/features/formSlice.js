import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isEditForm: false,
	todo: {
		id: 0,
		title: '',
		description: '',
		priority: 0,
		targetTime: new Date(),
		status: true,
	},
}

export const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		switchToCreateForm: (state) => {
			state.isEditForm = false
		},
		switchToEditForm: (state) => {
			state.isEditForm = true
		},
		addTodoToEdit: (state, action) => {
			state.todo = action.payload
		},
	},
})

export const { switchToCreateForm, switchToEditForm, addTodoToEdit } =
	formSlice.actions
export default formSlice.reducer
