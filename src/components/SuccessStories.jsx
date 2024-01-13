import React from 'react'
import Stories from './Stories'

const SuccessStories = () => {
	return (
		<div className='flex flex-col lg:mt-4 mt-72'>
			{/* Heading */}
			<div className='flex  flex-col items-center justify-center font-bold space-y-6'>
				<h1 className='text-3xl  text-[#063BF8]'>FEEDBACK</h1>
				<h1 className='text-xl '>OUR STUDENTS SHARED THEIR SUCCESS STORIES</h1>
			</div>
			{/* body */}
			<div className='lg:mx-10 mx-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-4 md:gap-16 gap-10 mt-10 mb-10'>
				<Stories />
				<Stories />
				<Stories />
			</div>
		</div>
	)
}

export default SuccessStories