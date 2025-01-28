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
				<h1 className='text-center text-[#eb8d15]'>
					WELCOME TO REGISTERKARO.IN
				</h1>
				<h1 className='text-[#272d37] text-center mt-2 font-bold text-3xl'>
					Explore Our Services
				</h1>
				<div>
					<div className='flex mt-20 justify-center '>
						<div className='flex mx-16 xl:mx-6 flex-col justify-center items-center'>
							<img
								className=' h-20 aspect-square'
								src={company.src}
							/>
							<h1 className='font-bold text-2xl mt-4'>Company Formation</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-4'>
								Build web-based solutions that enhance customer experience.
							</p>
							<button className='font-medium mt-8 pb-16'>Learn More</button>
						</div>
						<div className='w-[2px] h-auto bg-[#e5e2df]'></div>
						<div className='flex mx-16 xl:mx-6 flex-col justify-center items-center'>
							<img
								className=' h-20 aspect-square'
								src={analysis.src}
							/>
							<h1 className='font-bold text-2xl mt-4'>
								Company Secretarial Services
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-4'>
								Make data-driven decisions and utilize technology to reach
								business goals.
							</p>
							<button className='font-medium mt-8 pb-16'>Learn More</button>
						</div>
						<div className='w-[2px] h-auto bg-[#e5e2df]'></div>
						<div className='flex mx-16 xl:mx-6 flex-col justify-center items-center'>
							<img
								className=' h-20 aspect-square'
								src={virtual.src}
							/>
							<h1 className='font-bold text-2xl mt-4'>
								Virtual Office Address
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-4'>
								Foster customer relationships by effectively serving your
								market.
							</p>
							<button className='font-medium mt-8 pb-16'>Learn More</button>
						</div>
					</div>
					<div className='flex mt-10 justify-center '>
						<div className='flex mx-16 xl:mx-6 flex-col justify-center items-center'>
							<img
								className=' h-20 aspect-square'
								src={annual.src}
							/>
							<h1 className='font-bold text-2xl mt-4'>
								Annual Compliance Services
							</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-4'>
								Turn your ideas into modern products with our design experts.
							</p>
							<button className='font-medium mt-8 pb-16'>Learn More</button>
						</div>
						<div className='w-[2px] h-auto bg-[#e5e2df]'></div>
						<div className='flex mx-16 xl:mx-6 flex-col justify-center items-center'>
							<img
								className=' h-20 aspect-square'
								src={payroll.src}
							/>
							<h1 className='font-bold text-2xl mt-4'>Payroll Services</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-4'>
								Expand your business across the globe with minimal effort.
							</p>
							<button className='font-medium mt-8 pb-16'>Learn More</button>
						</div>
						<div className='w-[2px] h-auto bg-[#e5e2df]'></div>
						<div className='flex mx-16 xl:mx-6 flex-col justify-center items-center'>
							<img
								className=' h-20 aspect-square'
								src={Bookkeeping.src}
							/>
							<h1 className='font-bold text-2xl mt-4'>Bookkeeping Services</h1>
							<p className='font-light text-lg text-center w-[25ch] xl:w-[40ch] mt-4'>
								Steering user behaviours with creative design, data insights &
								technology.
							</p>
							<button className='font-medium mt-8 pb-16'>Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Explore
