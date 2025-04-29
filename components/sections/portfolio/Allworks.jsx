import React from 'react';

const Allworks = () => {
	const workdetails = [
		{
			title: 'Ultra Ooh',
			description: 'web design, frontend development',
			date: '/22',
		},
		{
			title: 'Alex Reacher',
			description: 'web design, frontend development',
			date: '/23',
		},
		{
			title: 'Crad Invest',
			description: 'web design, frontend development',
			date: '/21',
		},
		{
			title: 'Trenchhub',
			description: 'web design, frontend development',
			date: '/21',
		},
        {
			title: 'Ultra Ooh',
			description: 'web design, frontend development',
			date: '/22',
		},
		{
			title: 'Alex Reacher',
			description: 'web design, frontend development',
			date: '/23',
		},
		{
			title: 'Crad Invest',
			description: 'web design, frontend development',
			date: '/21',
		},
		{
			title: 'Trenchhub',
			description: 'web design, frontend development',
			date: '/21',
		},
	];
	return (
		<div className="md:grid md:grid-cols-2 gap-12 w-full">
			{workdetails.map((workdetail, index) => (
				<div key={index} className="  flex justify-between">
					<div className=''>
						<h5 className="text-4xl md:text-5xl pb-4">
							{workdetail.title}
						</h5>
						<p>{workdetail.description}</p>
					</div>
					<h3>{workdetail.date}</h3>
				</div>
			))}
		</div>
	);
};

export default Allworks;
