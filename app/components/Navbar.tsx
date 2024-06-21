import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Navbar = () => {
	return (
		<main
			className="flex justify-center mt-[30px] overflow-hidden "
			data-aos="fade-down"
		>
			<section className="lg:w-[80%] w-full ">
				<div className="flex justify-between bg-[#1E1E1E6E] rounded-[66px] border-[2px] border-[#373737] h-[60px] lg:h-[82px] ">
					<Link href="/" className="my-auto ">
						<h1 className="ml-[20px] lg:ml-[30px] my-auto text-[18px] lg:text-[25px] font-medium ">
							<span className="text-[#1b5cfe]">Lead</span>Votes
						</h1>
					</Link>
					<div className="flex">
						<Link href='/sign-up' className="my-auto">
						<button className="bg-[#1B5CFE] font-semibold hover:bg-[#1948b5] rounded-[89px] h-[40px] lg:h-[53px] lg:w-[105px] w-[70px] mr-[7px] my-auto text-[12px] lg:text-[15px] leading-[22.5px]">Sign Up</button>
						</Link>
						<button className="bg-[#1B5CFE] hover:bg-[#1948b5] rounded-[89px] h-[40px] lg:h-[53px] my-auto text-[12px] lg:text-[15px] leading-[22.5px] mr-[10px] lg:mr-[17px] font-medium px-[0px] lg:px-[25px] ">
							<ConnectButton />
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Navbar;
