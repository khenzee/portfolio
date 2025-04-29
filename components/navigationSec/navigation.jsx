'use client';

import { Menu, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
	const [activate, setActivate] = useState(false);
	const [isOn, setIsOn] = useState(true);
	return (
		<div className="fixed w-full biegeBg z-40 left-0 font-semibold">
			<div className="flex justify-between lg:px-24 lg:p-8 items-center p-4">
				<Link href="/" className="font-semibold">
					@Zee Devs
				</Link>
				<div className="lg:flex gap-4 hidden">
					<Link href="/about">About</Link>
					<Link href="/projects">Works</Link>
					<Link className="underline" href="/contact">
						Drop me a message
					</Link>
				</div>
				<div className="flex gap-4">
					<button
						className="md:flex justify-center items-center md:gap-2"
						onClick={() => setIsOn((prev) => !prev)}
					>
						<div
							className={`${
								isOn ? 'block' : 'md:hidden'
							} hidden md:block`}
						>
							Light Mode
						</div>
						<span
							className={`${isOn ? 'block' : 'hidden'}`}
						>
							<Sun />
						</span>
						<div
							className={`${
								isOn ? 'md:hidden' : 'block'
							} hidden md:block`}
						>
							Dark Mode
						</div>
						<span
							className={`${isOn ? 'hidden' : 'block'}`}
						>
							<Moon />
						</span>
					</button>
					<button
						className="lg:hidden"
						onClick={() => setActivate((prev) => !prev)}
					>
						<Menu />
					</button>
				</div>
			</div>
			{/* Menu for small screens */}
			<div
				className={`lg:hidden ${
					activate ? 'block' : 'hidden'
				}`}
			>
				<div className="flex flex-col pt-8 gap-4 w-full text-center">
					<Link href="/about">About</Link>
					<Link href="/projects">Works</Link>
					<Link
						className="bg-gray-800 biegetxt py-2 px-4"
						href="/contact"
					>
						Drop me a message
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
