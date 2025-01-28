import React from 'react'
import logo from '../Assets/logo.png'
import search from '../Assets/search.png'
import arrow from '../Assets/arrow.png'

const Navbar = () => {
	return (
		<>
			<div className='h-8 bg-[#1c4670]'></div>
			<div className='flex items-center justify-between mx-20'>
				<img
					className='h-20'
					src={logo.src}
				/>
				<div className='flex justify-center items-center text-lg text-[#272d37] gap-7 font-semibold'>
					<h1 className='cursor-pointer '>Home</h1>
					<h1 className='cursor-pointer flex justify-center items-center'>
						Our Services
						<img
							className='ml-2 h-4 aspect-square'
							src={arrow.src}
						/>
					</h1>
					<h1 className='cursor-pointer '>Blog</h1>
					<h1 className='cursor-pointer '>Contact Us</h1>
					<h1 className='cursor-pointer '>About Us</h1>
					<img
						className='h-6 aspect-square'
						src={search.src}
					/>
					<button className='bg-[#ffa229] rounded-sm text-white px-3 py-2'>
						Talk An Expert
					</button>
				</div>
			</div>
		</>
	)
}

export default Navbar
