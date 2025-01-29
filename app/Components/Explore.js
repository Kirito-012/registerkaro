import React from 'react'
import company from '../Assets/company.png'
import analysis from '../Assets/analysis.png'
import virtual from '../Assets/virtual.png'
import annual from '../Assets/virtual.png'
import payroll from '../Assets/payroll.png'
import Bookkeeping from '../Assets/bookkeeping.png'

const Explore = () => {
	return (
		<>
			<div className='bg-[#fafafa]'>
				<h1 className='text-center text-xs text-[#eb8d15]'>
					WELCOME TO REGISTERKARO.IN
				</h1>
				<h1 className='text-[#272d37] text-center mt-2 font-bold text-2xl'>
					Explore Our Services
				</h1>
				<div>
					<div className='flex flex-col md:flex-row md:flex-wrap md:mx-[89px] mt-10 justify-center '>
						<div className='flex flex-col mb-16 md:w-64 xl:w-[350px] items-center'>
							<div className='md:h-32'>
								<img
									className=' h-20 aspect-square'
									src={company.src}
								/>
							</div>
							<h1 className='font-bold text-center text-2xl mt-4'>
								Company Formation
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-2'>
								Build web-based solutions that enhance customer experience.
							</p>
							<button className='font-medium mt-4'>Learn More</button>
						</div>
						<div className='w-[2px] h-auto bg-[#e5e2df] mx-4'></div>
						<div className='flex flex-col mb-16 md:w-64 xl:w-[350px] items-center'>
							<div className='md:h-32'>
								<img
									className=' h-20 aspect-square'
									src={analysis.src}
								/>
							</div>
							<h1 className='font-bold text-center w-[20ch] text-2xl mt-4'>
								Company Secretarial Services
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-2'>
								Make data-driven decisions and utilize technology to reach
								business goals.
							</p>
							<button className='font-medium mt-4 '>Learn More</button>
						</div>
						<div className='w-[2px] hidden lg:flex h-auto bg-[#e5e2df] mx-4'></div>

						<div className='flex flex-col mb-16 md:w-64 xl:w-[350px] items-center'>
							<div className='md:h-32'>
								<img
									className=' h-20 aspect-square'
									src={virtual.src}
								/>
							</div>
							<h1 className='font-bold text-center text-2xl mt-4'>
								Virtual Office Address
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-2'>
								Foster customer relationships by effectively serving your
								market.
							</p>
							<button className='font-medium mt-4'>Learn More</button>
						</div>
						<div className='w-[2px] h-auto lg:hidden bg-[#e5e2df] mx-4'></div>
						<div className='flex flex-col mb-16 md:w-64 xl:w-[350px] items-center'>
							<div className='md:h-32'>
								<img
									className=' h-20 aspect-square'
									src={annual.src}
								/>
							</div>
							<h1 className='font-bold text-center text-2xl mt-4'>
								Annual Compliance Services
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-2'>
								Turn your ideas into modern products with our design experts.
							</p>
							<button className='font-medium mt-4'>Learn More</button>
						</div>
						<div className='w-[2px] hidden lg:flex h-auto bg-[#e5e2df] mx-4'></div>
						<div className='flex flex-col mb-16 md:w-64 xl:w-[350px] items-center'>
							<div className='md:h-32'>
								<img
									className=' h-20 aspect-square'
									src={payroll.src}
								/>
							</div>
							<h1 className='font-bold text-center w-[20ch] text-2xl mt-4'>
								Payroll Services
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-2'>
								Expand your business across the globe with minimal effort.
							</p>
							<button className='font-medium mt-4 '>Learn More</button>
						</div>
						<div className='w-[2px] h-auto bg-[#e5e2df] mx-4'></div>
						<div className='flex flex-col mb-16 md:w-64 xl:w-[350px] items-center'>
							<div className='md:md:h-32'>
								<img
									className=' h-20 aspect-square'
									src={Bookkeeping.src}
								/>
							</div>
							<h1 className='font-bold text-center text-2xl mt-4'>
								Bookkeeping Services
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-2'>
								Steering user behaviours with creative design, data insights &
								technology.
							</p>
							<button className='font-medium mt-4'>Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Explore
