import React from 'react';
import ProcessAccordion from './processAccordion';

const ProcessSec = () => {
	return (
		<div className="lg:flex px-6 lg:px-24 py-10 lg:gap-8">
			<div className='lg:w-1/2 lg:pr-16'>
				<h2 className="mb-2">
					My way of getting things done
				</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Animi voluptatem illo, voluptas dolores
					veniam cum quam deserunt necessitatibus beatae
					aliquam iusto eos minima id qui ipsa natus rem
					neque. Similique nostrum natus nihil iure.
				</p>
			</div>
			<div className='lg:w-1/2'>
                <ProcessAccordion/>
            </div>
		</div>
	);
};

export default ProcessSec;
