import Link from 'next/link';
import React from 'react';

const PortfolioCard = ({ projectsDet }) => {
	console.log(projectsDet);
	return (
		<>
			{projectsDet.map((projectsDet, index) => (
				<div
					key={index}
					className="flex justify-between items-center cursor-pointer py-4 border-b-[1px] border-b-gray-300"
				>
					<div> 
						<h5 className="text-4xl md:text-6xl pb-4">
							{projectsDet.title}
						</h5>
						<p>{projectsDet.description}</p>
					</div>
					<h3>{projectsDet.date}</h3>
				</div>
			))}
		</>
	);
};

export default PortfolioCard;
