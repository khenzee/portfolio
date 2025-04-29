import Hero from '../sections/hero';
import About from '../sections/about';
import Skills from '../sections/skills';
import Portfolio from '../sections/portfolio/porfolio';
import ProcessSec from '../process/process';

export default function LandingPagge() {
	return (
		<div className='w-full'>
			<Hero />
			{/* <About /> */}
			<Skills />
			<Portfolio />
			<ProcessSec />
			<div className='lg:px-24 px-4 lg:py-16 py-8'>
				<div className='text-center '>
					<h2 className="text-3xl md:text-6xl pb-4">
						Let's talk about a projefct, collaboration or an
						idea you may have
					</h2>
					<div className=''>
						<button className="py-2 px-8 mt-6 rounded-sm bg-gray-800 text-white">
							Drop Me a Message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
