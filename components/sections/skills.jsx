import React from 'react';

const Skills = () => {
	const mySkill = [
		{
			id: '01',
			title: 'Design',
			body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nesciunt mollitia veritatis saepe facere blanditiis.',
		},
		{
			id: '02',
			title: 'Development',
			body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nesciunt mollitia veritatis saepe facere blanditiis.',
		},
		{
			id: '03',
			title: 'The Full Package',
			body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nesciunt mollitia veritatis saepe facere blanditiis.',
		},
	];
	return (
		<div>
			<div className="px-4 py-4 lg:px-24">
				<h2 className="pb-6">What I Bring to the Table</h2>
				<div className="md:flex md:gap-2  ">
					{mySkill.map(({ id, title, body, index }) => (
						<div
							className="md:w-1/3 py-4 border-[1px] border-gray-300 rounded-md px-6 mb-4 "
							key={id}
						>
							<h3 className="pb-8 text-gray-800/50">
								{id}
							</h3>
							<div>
								<h4 className="pb-1 ">{title}</h4>
								<p className="pr-6 md:pr-10">{body}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
