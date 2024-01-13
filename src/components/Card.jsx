import React from 'react'

const Card = ({ name, icon, message, firstColor, secondColor }) => {
	console.log(firstColor, secondColor);
	return (
		<div className={`relative  w-[400px] h-[350px] rounded-lg p-6 flex flex-col items-center bg-gradient-to-br from-[${firstColor}] to-[${secondColor}]`}>
			<img src={icon} alt="" className='w-24 h-24 object-cover' />
			<h3 className='font-bold text-xl pt-10 text-center'>{name}</h3>
			{
				!firstColor  ? (
					<div className='absolute top-56 px-4 text-black text-center text-[16px]'><p>{message}</p></div>
				) : (
					<div className='lg:absolute lg:top-56 px-4  text-white text-[16px]'><p>{message}</p></div>
				)
			}

		</div>
	)
}

export default Card