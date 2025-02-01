import React from 'react'

const DynamicBlogs = ({info, img, name, desc, button}) => {
	return (
		<>
			<div className=''>
				<img
					className='w-full'
					src={img}
				/>
				<div className='mt-5'>
					<h1 className='text-[#667085] font-semibold text-sm md:text-base lg:text-sm'>
						{info}
					</h1>
					<h1 className='font-bold text-2xl mt-2 md:text-3xl lg:text-2xl'>
						{name}
					</h1>
					<h1 className='text-[#667085] text-base md:text-lg mt-2'>{desc}</h1>
					<button className='bg-[#f9f5ff] font-semibold mt-3 w-auto text-[#663dc5] rounded-lg md:text-base lg:text-sm text-sm px-4 py-1'>
						{button}
					</button>
				</div>
			</div>
		</>
	)
}

export default DynamicBlogs
