import React from 'react'
import video from '../Assets/video.png'
import bulb from '../Assets/bulb.png'
import ideas from '../Assets/ideas.png'

const Video = () => {
	return (
		<div className='bg-[#1c4670]'>
			<div className='flex flex-col lg:flex-row md:mx-20 lg:mx-28 '>
				<div className='text-white mt-14 mx-8 lg:mb-10 '>
					<h1 className='font-bold text-3xl'>Our Video Introductions</h1>
					<p className='text-[#aab5cd] mt-4 text-sm'>
						Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
						vulputate pellentesque a diam tincidunt apis dui.
					</p>
					<div className='flex items-center mt-6'>
						<div className='mr-4'>
							<div className='bg-[#ffa229] flex justify-center items-center h-14 aspect-square rounded-full'>
								<img
									className='h-8 aspect-square'
									src={bulb.src}
								/>
							</div>
						</div>
						<div>
							<h1 className='font-semibold text-lg'>Explore ideas together</h1>
							<p className='text-[#aab5cd] mt-1 text-sm'>
								Engage audience segments and finally create actionable insights.
								Amplify vertical integration.
							</p>
						</div>
					</div>
					<div className='flex items-center mt-6'>
						<div className='mr-4'>
							<div className='bg-[#ffa229] flex justify-center items-center h-14 aspect-square rounded-full'>
								<img
									className='h-8 aspect-square'
									src={ideas.src}
								/>
							</div>
						</div>
						<div>
							<h1 className='font-semibold text-lg'>
								Bring those ideas to life
							</h1>
							<p className='text-[#aab5cd] mt-1 text-sm'>
								EEngage audience segments and finally create actionable
								insights. Amplify vertical integration..
							</p>
						</div>
					</div>
				</div>
				<div className='mt-10 mx-10 mb-10 flex justify-center items-center'>
					<img
						className='w-[40rem] xl:w-[50rem] rounded-md'
						src={video.src}
					/>
				</div>
			</div>
		</div>
	)
}

export default Video
