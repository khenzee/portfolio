import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className="bg-gray-800 text-white py-4">
				<div className="container justify-between lg:px-24 px-6 lg:flex text-center">
					<p className="biegetxt">
						&copy; {new Date().getFullYear()} All rights
						reserved.
					</p>
					<div className="flex justify-center space-x-4 mt-2">
						<Link
							href="#"
							className="text-gray-400 hover:text-white"
						>
							Facebook
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-white"
						>
							Twitter
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-white"
						>
							LinkedIn
						</Link>
					</div>
					<div className='text-right'>
						<button className="flex gap-2 biegetxt ">
							Back to top
							<span>
								<ArrowUp />
							</span>
						</button>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
