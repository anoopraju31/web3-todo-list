import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-white dark:bg-gray-900 shadow py-4 pt-0'>
			<div className='w-full mx-auto py-4'>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700' />
				<span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
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
