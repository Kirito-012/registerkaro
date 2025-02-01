import React from 'react'
import DynamicBlogs from './DynamicBlogs'
import blog1 from '../Assets/blog1.png'
import blog2 from '../Assets/blog2.png'
import blog3 from '../Assets/blog3.png'

const Blogs = () => {
	return (
		<div className='my-20'>
			<h1 className='text-[#ea8d16] text-center'>EXPLORE OUR BLOGS</h1>
			<h1 className='font-bold text-4xl text-center mt-3 mb-10'>
				Accelerate Digital Transformation
			</h1>
			<div className='flex flex-col mx-10 lg:flex-row lg:mx-14 xl:mx-20 gap-10 justify-center'>
				<DynamicBlogs
					img={blog1.src}
					info='Prabhash Mishra • 1 Jan 2023 • Today'
					name='Small business & Startup'
					desc='Like to know the secrets of transforming a 2-14 team into a 3x Super
						Bowl winning Dynasty?'
					button='Tax & Audit'
				/>
				<DynamicBlogs
					img={blog2.src}
					info='Mahesh Kumar • 1 Jan 2023'
					name='Scale-Up Company Offer'
					desc='Mental models are simple expressions of complex processes or relationships.'
					button='Tax'
				/>
				<DynamicBlogs
					img={blog3.src}
					info='Rakhi Verma • 1 Jan 2023'
					name='Growing Business Package'
					desc='Introduction to Wireframing and its Principles. Learn from the best in the industry.'
					button='Audit'
				/>
			</div>
		</div>
	)
}

export default Blogs
