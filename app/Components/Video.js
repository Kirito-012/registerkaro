import React from 'react'
import video from '../Assets/video.png'
import bulb from '../Assets/bulb.png'
import ideas from '../Assets/ideas.png'

const Video = () => {
	return (
		<div>
			<div className='flex justify-center items-center w-screen bg-[#1c4670] h-[30rem] '>
				<div className='w-[45vw] xl:w-[50vw] text-white ml-20'>
					<h1 className='font-bold text-3xl'>Our Video Introductions</h1>
					<p className='text-[#aab5cd] w-[50ch] mt-4 text-lg'>
						Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
						vulputate pellentesque a diam tincidunt apis dui.
					</p>
					<div className='flex items-center mt-6'>
						<div className='bg-[#ffa229] mr-5 rounded-full'>
							<img
								className='h-8 m-4 aspect-square'
								src={bulb.src}
							/>
						</div>
						<div>
							<h1 className='font-semibold text-xl'>Explore ideas together</h1>
							<p className='text-[#aab5cd] w-[50ch] mt-1 text-base'>
								Engage audience segments and finally create actionable insights.
								Amplify vertical integration.
							</p>
						</div>
					</div>
					<div className='flex items-center mt-6'>
						<div className='bg-[#ffa229] mr-5 rounded-full'>
							<img
								className='h-8 m-4 aspect-square'
								src={ideas.src}
							/>
						</div>
						<div>
							<h1 className='font-semibold text-xl'>
								Bring those ideas to life
							</h1>
							<p className='text-[#aab5cd] w-[50ch] mt-1 text-base'>
								Engage audience segments and finally create actionable insights.
								Amplify vertical integration.
							</p>
						</div>
					</div>
				</div>
				<div className='w-[45vw]'>
					<img
						className='w-[30rem] xl:w-[35rem] rounded-md'
						src={video.src}
					/>
				</div>
			</div>
		</div>
	)
}

export default Video
