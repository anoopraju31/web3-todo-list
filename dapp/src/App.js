import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Error, Home, Login } from './pages'

const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/connect' element={<Login />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	)
}

export default App
