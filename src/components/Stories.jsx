import React from 'react'
import StoryImg from '../assets/story.svg'

const Stories = () => {
	return (
		<div className='relative w-[380px] h-[360px] rounded-xl'>
			<img src={StoryImg} alt="" className='h-[360px] w-full object-cover rounded-xl' />
			<div className='px-4 absolute bottom-0 text-white bg-[#f7e135] w-full rounded-b-xl '>
				<h1 className='text-xl font-bold'>Nyeko Vincent</h1>
				<p>Software Developer <span>At JavaScript Kampala</span></p>
			</div>
		</div>
	)
}

export default Stories