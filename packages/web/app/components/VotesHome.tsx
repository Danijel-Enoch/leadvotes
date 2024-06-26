import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import votetree from "../assets/votetree.svg";
import VotingDetails from "../data.json";
import ContestantDetails from "./ContestantDetails";
import Footer from "./Footer";
import { trimWalletAddress } from "@/services/utils/parser";
import { readData } from "@/services/database/database";

interface VotingData {
	voteduration: string;
	address: string;
}

const VotesHome = ({ pollsData, campaingId }: any) => {
	const votes: VotingData[] = VotingDetails;
	const [amountOfvotes, setAmountOfvotes] = useState(0);
	console.log({ pollsData });
	const keysWithContestants = Object.keys(pollsData).filter((key) =>
		key.includes("contestants_")
	).length;
	const contestants = Object.entries(pollsData)
		.filter(([key, value]) => key.startsWith("contestants_"))
		.reduce((acc: any, [key, value]) => {
			acc[key] = value;
			return acc;
		}, {});
	useEffect(() => {
		readData("votes/" + campaingId).then((data: any) => {
			//console.log({ amountOfvotes: Object.keys(data.val()).length });
			setAmountOfvotes(Object.keys(data.val()).length);
		});
	}, [campaingId]);
	return (
		<main>
			<Navbar />
			<section className="flex justify-center  overflow-hidden  ">
				<div className="lg:w-[80%] w-full mt-[25px] ">
					<Image
						src={votetree}
						alt="tree-img"
						className="w-full rounded-[40px] "
						data-aos="zoom-in"
					/>

					<div className="font-semibold text-center">
						<h1
							className="lg:text-[55px] text-[30px] leading-[50px] lg:leading-[82.5px] mt-[60px]"
							data-aos="zoom-out"
						>
							Most Influential Student
						</h1>
						<p className="lg:text-[19px] text-[16px] font-medium lg:leading-[28.5px] mb-[45px] mt-[20px] w-[80%] mx-auto  ">
							{pollsData?.desc?.toString()}
						</p>
						<div className="bg-[#2C2C2C80] rounded-[21px] lg:text-[14px] font-semibold lg:leading-[24px] py-[10px] px-[15px] mx-auto w-fit ">
							{".."}
						</div>
						<div className="flex mt-[20px] mx-auto w-fit ">
							<div className="bg-[#1B5CFE] rounded-[50%] w-[40px] h-[40px] "></div>
							<p className="my-auto lg:text-[15px] font-medium lg:leading-[22.5px] ml-[10px] ">
								{trimWalletAddress(pollsData?.creator)}
							</p>
						</div>
						<div className="flex lg:w-[535px] justify-evenly mx-auto mt-[30px] ">
							<button
								className="lg:w-[177px] w-[80px] h-[44px] rounded-[44px] border-[1px] border-[#636363] text-[15px] lg:text-[20px] lg:leading-[30px]"
								data-aos="fade-up"
								data-duration="1400"
							>
								{amountOfvotes + " Vote "}
							</button>
							<button
								className="lg:w-[179px] w-[140px] h-[44px] rounded-[44px] border-[1px] border-[#636363] text-[15px] lg:text-[20px] lg:leading-[30px]"
								data-aos="fade-up"
								data-duration="1500"
							>
								{keysWithContestants / 2} : contestants
							</button>
							{/* <button
									className="lg:w-[159px] w-[90px] h-[44px] rounded-[44px] border-[1px] border-[#636363] text-[15px] lg:text-[20px] lg:leading-[30px] bg-[#1B5CFE5C] "
									data-aos="fade-up"
									data-duration="1600"
								>
									Edit Poll
								</button> */}
						</div>
					</div>

					<ContestantDetails
						contestants={contestants}
						campaingId={campaingId}
					/>
					<Footer />
				</div>
			</section>
		</main>
	);
};

export default VotesHome;
