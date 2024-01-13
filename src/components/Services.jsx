import Card from "./Card";
import { services } from '../data/data'

const Services = () => {
	return (
		<div className="bg-[#F5F5F5] lg:mt-10 -mt-36 pt-10 flex flex-col	">
			<h1 className="lg:pb-0 pb-10 text-center lg:text-3xl text-2xl font-bold text-[#F80606] "><span className="bg-[#F80606] rounded-l-full p-2 text-white">OUR</span> SERVICES</h1>
		
			<div className="flex lg:flex-row flex-col lg:gap-4 md:gap-8 gap-36 items-center justify-evenly w-full lg:h-[500px] h-[700px] lg:-mt-10 mt-52">
				{
					services.map((service) => (
						<Card
							key={service.id}
							name={service.name}
							icon={service.icon}
							message={service.message}
							firstColor={service.firstcolor}
							secondColor={service.secondColor}
						/>
					))
				}
			</div>
		</div>
	);
}

export default Services;