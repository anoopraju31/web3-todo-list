import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Error, Home, Login } from './pages'
import { Footer, Navbar } from './components'

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/connect' element={<Login />} />
				<Route path='*' element={<Error />} />
			</Routes>

			<Footer />
		</div>
	)
}

export default App
