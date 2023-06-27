import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isEditForm: false,
	modelOpen: false,
	todo: {
		id: 0,
		title: '',
		description: '',
		priority: 0,
		targetTime: null,
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
		toggleModel: (state, action) => {
			state.modelOpen = action.payload
		},
	},
})

export const {
	switchToCreateForm,
	switchToEditForm,
	addTodoToEdit,
	toggleModel,
} = formSlice.actions
export default formSlice.reducer
