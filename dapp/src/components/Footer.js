import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-gray-900 shadow p-4 pt-0'>
			<div className='w-full max-w-screen-xl mx-auto p-4 md:py-4 '>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2023{' '}
					<a href='https://flowbite.com/' className='hover:underline mr-1'>
						ETHTODO
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
