import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className="lg:pt-32 pb-8 lg:pb-16 pt-24 px-6 lg:px-24 md:flex justify-between items-center md:gap-8">
			<div className="md:w-1/2">
				<div className="mb-8">
					<h1>Bukola</h1>
					<h1>Laniyan</h1>
				</div>
				<p className="lg:pr-8">
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Laboriosam provident neque
					sapiente! Error eius at accusamus veritatis omnis
					quos minus?
				</p>
				<div className=" md:hidden aspect-square w-full overflow-hidden object-cover">
					<Image
						src={'/images/myprofilepics.jpg'}
						width={500}
						height={50}
						alt="my picture"
					/>
				</div>
				<p className="lg:pr-8 py-8">
					Lorem ipsum, dolor sit amet consectetur
					adipisicing elit. Laboriosam provident neque
					sapiente! Error eius at accusamus veritatis omnis
					quos minus?
				</p>
				<button className="py-2 px-8  rounded-sm bg-gray-800 text-white">
					Drop Me a Message
				</button>
			</div>
			<div className="md:w-1/2 hidden md:inline-block aspect-square overflow-hidden object-cover">
				<Image
					src={'/images/myprofilepics.jpg'}
					width={500}
					height={50}
					alt="my picture"
				/>
			</div>
		</div>
	);
};

export default About;
