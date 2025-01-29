import React from 'react'
import shield from '../Assets/shield.png'
import satisfaction from '../Assets/checkmark.png'
import smiley from '../Assets/smiley.png'
import person from '../Assets/person.png'

const WhyChoose = () => {
	return (
		<>
			<div className='flex flex-col lg:flex-row mt-20 mb-40 mx-10 lg:mx-20'>
				<div className='lg:w-[50vw]'>
					<h1 className='text-[#eb8d15] font-light'>WHY REGISTERKARO.IN</h1>
					<h1 className='mt-4 text-4xl font-bold'>Why Choose Register Karo</h1>
					<p className='mt-4 lg:w-[35ch] xl:w-[60ch]'>
						It is with consistent services and results that build trust with the
						people and that in turn help us to serve the business better.
					</p>
				</div>
				<div className='flex flex-wrap mt-10 justify-center gap-5 md:mx-10 lg:mx-0'>
					<div className='flex flex-col justify-center items-center h-[13rem] md:w-[18rem] lg:w-[16rem] xl:w-[19rem] border-[#fcddec] rounded-md border-2 bg-[#fef3ef] '>
						<img
							className='h-12'
							src={shield.src}
						/>
						<h1 className='mt-4 font-semibold text-xl'>Confidential & Safe</h1>
						<p className='mt-3 text-[#666666] mx-10 text-center'>
							All your private information is safe with us
						</p>
					</div>
					<div className='flex flex-col justify-center items-center h-[13rem] md:w-[18rem] lg:w-[16rem] xl:w-[19rem] border-[#fcddec] rounded-md border-2 bg-[#f1fbf3] '>
						<img
							className='h-10'
							src={satisfaction.src}
						/>
						<h1 className='mt-4 font-semibold text-xl'>No Hidden Fee</h1>
						<p className='mt-3 text-[#666666] mx-10 text-center'>
							Everything is put before you with no hidden charges or conditions
						</p>
					</div>
					<div className='flex flex-col justify-center items-center h-[13rem] md:w-[18rem] lg:w-[16rem] xl:w-[19rem] border-[#fcddec] rounded-md border-2 bg-[#edf3ff] '>
						<img
							className='h-10'
							src={smiley.src}
						/>
						<h1 className='mt-4 font-semibold text-xl'>
							Guaranteed Satisfaction
						</h1>
						<p className='mt-3 text-[#666666] mx-10 text-center'>
							We ensure that you stay 100% satisfied with our offered services
						</p>
					</div>
					<div className='flex flex-col justify-center items-center h-[13rem] md:w-[18rem] lg:w-[16rem] xl:w-[19rem] border-[#fcddec] rounded-md border-2 bg-[#fbf1fb] '>
						<img
							className='h-12'
							src={person.src}
						/>
						<h1 className='mt-4 font-semibold text-xl'>
							Expert CA/CS Assistance
						</h1>
						<p className='mt-3 text-[#666666] mx-10 text-center'>
							Prompt support from our in-house expert professionals
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default WhyChoose
