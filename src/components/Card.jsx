import React from 'react'
import ServiceIcon from '../assets/service.svg';

const Card = () => {
	return (
		<div className='bg-[#f7e135] w-[400px] h-[300px] rounded-lg p-6 mt-4   flex flex-col items-center'>
			{/* icon */}
			<img src={ServiceIcon} alt="" className='w-24 h-24 object-cover' />
			{/* title */}
			<h3 className='font-bold text-xl pt-10'>One Stop Study Solution</h3>
			{/* message */}
			<div>
				<p>Get a full view so you know where to save. Track spending, deta ke</p>
			</div>
			{/*  button */}
			<button className='bg-[#063BF8] p-2 rounded-lg text-white mt-2 mb-2'>Learn More</button>
		</div>
	)
}

export default Card