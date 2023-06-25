import React, { useState } from 'react'
import { useWidth } from '../hooks'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const currentWidth = useWidth()

	return (
		<nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
			<div className='max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto py-4 px-8 md:px-16'>
				<a href='/' className='flex items-center'>
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						ETHTODO
					</span>
				</a>
				<div className='flex md:hidden md:order-2'>
					<button
						data-collapse-toggle='navbar-sticky'
						type='button'
						onClick={() => setOpen((prev) => !prev)}
						className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						aria-controls='navbar-sticky'
						aria-expanded='false'>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'></path>
						</svg>
					</button>
				</div>
				<div
					className={`items-center justify-between w-full ${
						currentWidth < 768 && open ? 'block' : 'hidden'
					} md:flex md:w-auto md:order-1`}>
					<ul className='flex flex-col gap-4 md:gap-0 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
						<li>
							<button
								type='button'
								className='w-full md:w-[102px] flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-[10px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								Add Todo
							</button>
						</li>

						<li className='w-full'>
							<ConnectButton showBalance={false} />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
