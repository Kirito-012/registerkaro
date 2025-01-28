import React from 'react'
import img1 from '../Assets/about.png'
const About = () => {
	return (
		<>
			<div className='flex justify-center mt-20 mx-20'>
				<div className='w-[45vw] mr-8'>
					<h1 className='text-[#eb8d15] font-light'>
						WELCOME TO REGISTERKARO.IN
					</h1>
					<h1 className='mt-4 text-4xl font-bold'>
						About <span className='text-[#eb8d15] '>Register Karo</span>
					</h1>
					<p className='mt-4'>
						We have been using Intelegencia as our DevOps vendor for our field
						service applications over the last couple of years and I'm extremely
						pleased with their performance, ability to execute, and willingness
						to adapt in our ever changing environment. Perry is an outstanding
						leader who is fanatical about customer satisfaction. He has built a
						solid team which has consistently delivered on projects thereby
						exceeding everyone's expectations.
					</p>
					<p className='mt-4'>
						I would strongly recommend their services to any organization that
						is looking for solid, reliable, and predictable outcomes.
					</p>
					<button className='bg-[#1c4670] text-white px-6 mt-10 py-3 rounded-md'>
						Learn More
					</button>
				</div>
				<div className='flex w-[50vw] justify-center items-center'>
					<img
						className=' w-[30rem]'
						src={img1.src}
					/>
				</div>
			</div>
		</>
	)
}

export default About
