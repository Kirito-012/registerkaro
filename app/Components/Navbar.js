'use client'
import React, {useState} from 'react'
import logo from '../Assets/logo.png'
import search from '../Assets/search.png'
import arrow from '../Assets/arrow.png'
import menu from '../Assets/menu.png'

const Navbar = () => {
	const [isMenu, setIsMenu] = useState(false)
	return (
		<>
			{/* dekstop */}
			<div className='hidden lg:block'>
				<div className='h-8 bg-[#1c4670]'></div>
				<div className='flex items-center justify-between mr-10 xl:mx-20'>
					<img
						className='h-20'
						src={logo.src}
					/>
					<div className='flex justify-center items-center text-base xl:text-lg text-[#272d37] gap-6 xl:gap-7 font-semibold'>
						<h1 className='cursor-pointer '>Home</h1>
						<h1 className='cursor-pointer flex justify-center items-center'>
							Our Services
							<img
								className='ml-1 h-4 aspect-square'
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
			</div>

			{/* mobile */}
			<div className='lg:hidden mt-4 flex items-center justify-between mr-10'>
				<img
					className='h-14'
					src={logo.src}
				/>
				<img
					onClick={() => setIsMenu(!isMenu)}
					className='aspect-square h-7'
					src={menu.src}
				/>
			</div>
			<div
				className={`${
					isMenu ? 'flex' : 'hidden'
				} bg-white absolute top-0 left-0 w-screen h-screen`}>
				<div className='mt-16 ml-10'>
					<div
						className='font-semibold text-2xl'
						onClick={() => setIsMenu(!isMenu)}>
						X
					</div>
					<div className='mt-10 text-xl flex flex-col gap-2  font-medium'>
						<h1 className='cursor-pointer'>Home</h1>
						<h1 className='cursor-pointer flex items-center'>
							Our Services
							<img
								className='ml-2 h-4 aspect-square'
								src={arrow.src}
							/>
						</h1>
						<h1 className='cursor-pointer '>Blog</h1>
						<h1 className='cursor-pointer '>Contact Us</h1>
						<h1 className='cursor-pointer '>About Us</h1>
						<button className='bg-[#ffa229] mt-2 rounded-md text-lg text-white px-3 py-2'>
							Talk An Expert
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
