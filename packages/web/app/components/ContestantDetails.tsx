"use client";
import React, { useEffect } from "react";
import VotingDetails from "../data.json";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import brown from "../assets/brown.png";
import ice from "../assets/ice.png";
import { useAccount, useSignMessage } from "wagmi";
import { createDataIfNotExists, readData } from "@/services/database/database";
import { ToastContainer, toast } from "react-toastify";

interface VotingData {
	votername: string;
	date: string;
	address: string;
}

const ContestantDetails = ({ contestants, campaingId }: any) => {
	const { address, isConnected } = useAccount();
	const {
		data: signMessageData,
		error,
		isSuccess,
		isIdle,
		isPending,
		signMessage,
		variables,
		signMessageAsync
	} = useSignMessage();
	const contestLength = Object.keys(contestants).length / 2;
	const listOfContestantsKeys = Object.keys(contestants)
		.map((key, index) => {
			let data = { name: null, desc: null };
			data["name"] = contestants["contestants_" + index + "_name"];
			data["desc"] = contestants["contestants_" + index + "_desc"];
			return data;
		})
		.slice(0, contestLength);
	console.log({ listOfContestantsKeys });
	const votes: VotingData[] = VotingDetails;

	useEffect(() => {
		if (isConnected) {
			console.log({ address });
		}
	}, [isConnected, address]);

	async function handleVoting(contestantsName: string) {
		//sign transactions
		if (isConnected) {
			const data = await readData(
				"votes/" + campaingId + "/" + address?.toString()
			);
			const votersData = await readData(
				"student/voter/" + address?.toString()
			);
			if (votersData.exists()) {
				if (data.exists()) {
					toast.error(
						"You have already voted for " + data.val().name
					);
				} else {
					await signMessageAsync({
						message: "Vote for " + contestantsName
					})
						.then(async () => {
							// find users votes for campaing and see who qwas voted for

							console.log("signed message");
							await createDataIfNotExists(
								"votes/" +
									campaingId +
									"/" +
									address?.toString(),
								{ name: contestantsName },
								() => {}
							)
								.then((res) =>
									toast.success(
										"Voted for " + contestantsName
									)
								)
								.catch((err) =>
									toast.error(
										"Failed to vote for " + contestantsName
									)
								);
						})
						.catch((err) => {
							toast.error("Error signing message");
						});
				}
			} else {
				toast.error("You Have not registered yet . Pls Sign Up");
			}
		} else {
			toast.error("Please connect your wallet");
		}

		// send vote
	}
	return (
		<main className="flex justify-center mt-[52px] overflow-hidden">
			<section className="w-full">
				<h1
					className="text-center text-[30px] lg:text-[55px] font-semibold leading-[50px] lg:leading-[82.5px] mb-[30px] lg:mb-[42px]  "
					data-aos="fade-up"
				>
					{" "}
					Contestants
				</h1>
				{listOfContestantsKeys.length > 0 &&
					listOfContestantsKeys.map((vote, index) => (
						<section key={index}>
							<div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between lg:mb-[70px] ">
								<div
									className="flex lg:flex-row flex-col-reverse mb-[60px] lg:mb-[80px]"
									data-aos="fade-up"
									data-duration="1500"
								>
									<Image
										src={brown}
										alt="desert"
										className="lg:w-[347px] mt-[20px] lg:mt-[0px] lg:mr-[10px] w-[80%] lg:mx-[0px] mx-auto"
									/>
									<div className="w-[80%] lg:mx-[0px] mx-auto lg:w-[200px] bg-[#151515] rounded-[25px] pt-[28px] px-[30px] ">
										<h1 className="text-[15px] font-semibold leading-[30px]  ">
											{vote.name}
										</h1>
										<div className="flex my-[20px] w-fit mx-auto">
											<div className="bg-[#2C2C2C] rounded-[50%] w-[35px] h-[35px] "></div>
											<p className="my-auto text-[14px] font-semibold leading-[21px] ml-[11px] ">
												{vote.desc}
											</p>
										</div>
										<button
											onClick={async () =>
												await handleVoting(
													vote.name as unknown as string
												)
											}
											className="w-full bg-[#1B5CFE] hover:bg-[#1948b5] py-[12px] rounded-[81px] text-[15px] font-semibold leading-[22.5px] mb-[60px] "
										>
											Vote
										</button>
									</div>
								</div>
							</div>
						</section>
					))}
			</section>
			<ToastContainer />
		</main>
	);
};

export default ContestantDetails;
