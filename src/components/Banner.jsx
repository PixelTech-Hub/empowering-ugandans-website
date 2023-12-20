import React from 'react'
import BannerImg from '../assets/banner.svg';

const Banner = () => {
	return (
		<section className='relative flex w-full items-center'>
			{/* Left Section -- Words */}
			<div className='lg:w-1/2 h-[500px]  flex flex-col  lg:text-5xl text-3xl px-10 lg:pt-36 pt-10 items-start'>
				<h1 className='font-bold  '>YOUR <span className='text-[#F80606]'>SUCCESS</span> JOURNEY STARTS WITH US</h1>
				<p className='pt-4 pb-4 text-xl'>Providing Marketable Skills To a Create A Brighter Future</p>
				<div className='lg:absolute bottom-4 flex flex-row  items-center justify-center lg:gap-4 gap-24 font-bold lg:mt-16 mt-4 text-lg'>
					<button className='bg-[#F80606] p-3 rounded-lg text-white hover:bg-[#063BF8]'>Apply Online</button>
					<button  className='hover:bg-[#F80606] p-3 rounded-lg text-white bg-[#063BF8]'>Discover</button>
				</div>
			</div>
			{/* Right Section -- Image */}
			<div className='hidden lg:flex relative w-1/2 h-[500px] '>
				<div className='absolute -z-10 top-24 right-[400px]  w-20 h-20 bg-[#F80606] rounded-full'>

				</div>
				<img src={BannerImg} alt="" className=' w-[550px] ' />
			</div>
		</section>
	)
}

export default Banner;