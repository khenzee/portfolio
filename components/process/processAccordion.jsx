'use client';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';

const ProcessAccordion = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const accordionData = [
		{
			title: 'Ux / Wireframing',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem illo, voluptas doloresveniam cum quam deserunt necessitatibus',
		},
		{
			title: 'Web Design',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem illo, voluptas doloresveniam cum quam deserunt',
		},
		{
			title: 'Web Development',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem illo, voluptas doloresveniam cum quam deserunt',
		},
		{
			title: 'Analytics Setup / Support',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatem illo, voluptas doloresveniam cum quam deserunt',
		},
	];

	const handleAccordionClick = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	return (
		<div>
			{accordionData.map((item, index) => (
				<div key={index}>
					<button
						onClick={() => handleAccordionClick(index)}
						className="font-semibold flex justify-between items-center w-full py-4 px-6 border-b-[1px] border-b-gray-300 text-left focus:outline-none"
					>
						<span>{item.title}</span>
						<span className="font-bold">
							{activeIndex === index ? <Minus /> : <Plus />}
						</span>
					</button>
					{activeIndex === index && (
						<div className='p-4 bg-gray-800 biegetxt'>{item.content}</div>
					)}
				</div>
			))}
		</div>
	);
};

export default ProcessAccordion;
