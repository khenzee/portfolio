import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<div className="px-4 md:flex justify-between items-center md:gap-8 lg:px-24 lg:min-h-svh pt-16 pb-4">
			<div className="md:w-1/2">
				<div className="py-8 lg:py-16">
					<h1 className="">Digital</h1>
					<h1 className="">Designer</h1>
				</div>
				<div>
					<div>
						<p className="">
							Lorem ipsum dolor sit amet consectetur,
							adipisicing elit. Ab nesciunt mollitia
							veritatis saepe facere blanditiis eveniet
							officia, nostrum aliquid? Nisi repellat eos
							eveniet voluptates aliquam saepe, deserunt
							consequuntur.
						</p>
						<button className="py-2 px-8 mt-6 rounded-sm bg-gray-800 text-white">
							Drop Me a Message
						</button>
					</div>
				</div>
			</div>
			<div className="hidden md:w-1/2 md:inline-block aspect-square overflow-hidden object-cover">
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

export default Hero;
