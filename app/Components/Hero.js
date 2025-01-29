import React from 'react'
import trusted from '../Assets/trusted.png'

const Hero = () => {
	return (
		<div className='flex flex-col justify-center items-center mx-10 lg:mx-20'>
			<h1 className='text-[#272d37] font-bold text-xl lg:text-2xl mt-10'>
				Trusted By Over 100+ Startups and freelance business
			</h1>
			<img
				className='w-screen mt-4 mb-20'
				src={trusted.src}
			/>
		</div>
	)
}

export default Hero
