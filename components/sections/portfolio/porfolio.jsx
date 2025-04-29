import React from 'react';
import PortfolioCard from './portfoliocard';
import Link from 'next/link';

const Portfolio = () => {
	const workdetail = [
    {title: 'Ultra Ooh', description: 'web design, frontend development', date: '/22'},
    {title: 'Alex Reacher', description: 'web design, frontend development', date: '/23'},
    {title: 'Crad Invest', description: 'web design, frontend development', date: '/21'},
    {title: 'Trenchhub', description: 'web design, frontend development', date: '/21'}
  ];

	return (
		<div className='px-6 lg:px-24'>
			<div className='md:flex border-b-[1px] border-b-gray-300 mb-8 justify-between md:items-center py-4'>
				<h4>
					Selected Projects
					<span className="font-normal text-sm relative bottom-2 ">
						(4)
					</span>
				</h4>
        <p>A piece from my selection of projects.</p>
			</div>
			<PortfolioCard projectsDet = {workdetail} />
      <div className='md:flex gap-2 py-10'>
        <p>Looking for more?</p>
        <Link href={'./'} className='font-semibold' >Let's talk about your next project.</Link>
      </div>
		</div>
	);
};

export default Portfolio;
