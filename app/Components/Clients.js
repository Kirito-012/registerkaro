import React from 'react'
import clients from '../Assets/clients.png'
import clients2 from '../Assets/clients2.png'
import arrow from '../Assets/right_arrow.png'

const Clients = () => {
	return (
		<>
			<div className='bg-[#fafafa] pb-20 flex flex-col'>
				<div className='flex flex-col mx-10 md:mx-20 lg:mx-32'>
					<h1 className='font-bold text-3xl mt-20'>Our Happy Clients</h1>
					<p className='text-[#666666] mt-5 lg:w-[70ch]'>
						Professionally cultivate one-to-one customer service with robust
						ideas. Dynamically innovate resource- leveling customer service for
						state of the art customer service.
					</p>
				</div>
				<img
					className='mt-5 hidden md:flex w-screen'
					src={clients.src}
				/>
				<button className='flex lg:justify-center lg:items-center mx-10 md:mx-20 mt-10 gap-2 text-[#1c4670] font-semibold'>
					Show more
					<img
						src={arrow.src}
						className='w-5'
					/>
				</button>
			</div>
			<img
				className=' hidden w-screen'
				src={clients2.src}
			/>
		</>
	)
}

export default Clients
