"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAccount, useSignMessage } from "wagmi";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "viem";

export default function CreatePollPage() {
	const [pollsData, setPoolsData] = useState({
		name: "",
		desc: "",
		img: "",
		amount: 1
	});
	const { isConnected, address } = useAccount();
	const {
		data: signMessageData,
		error,
		isLoading,
		signMessage,
		variables
	} = useSignMessage();
	useEffect(() => {
		if (isConnected) {
			let data = pollsData;
			data["creator"] = address.toString();
			setPoolsData(data);
		}
		isLoading ? toast.info("Please wait...") : null;
	}, [isConnected, address, pollsData]);
	return (
		<div>
			<ConnectButton />
			<h1>Create Poll</h1>
			<div>
				<label>Poll Image (Required)</label>
				<input
					onChange={(e) =>
						setPoolsData({ ...pollsData, img: e.target.value })
					}
					type="file"
				/>
			</div>
			<div>
				<label>Poll Name (Required)</label>
				<input
					className="text-black"
					onChange={(e) =>
						setPoolsData({ ...pollsData, name: e.target.value })
					}
					value={pollsData.name}
					type="text"
				/>
			</div>
			<div>
				<label>Poll Description (Required)</label>
				<input
					className="text-black"
					onChange={(e) =>
						setPoolsData({ ...pollsData, desc: e.target.value })
					}
					value={pollsData.desc}
					type="textarea"
				/>
			</div>
			<div>
				<label>Amount Of Contestants(Required)</label>
				<input
					className="text-black"
					onChange={(e) => {
						if (e.target.value >= 0 && e.target.value <= 100) {
							setPoolsData({
								...pollsData,
								amount: e.target.value
							});
						} else {
							toast.error("Amount should be between 1 and 100");
						}
					}}
					value={pollsData.amount}
					type="text"
				/>
			</div>

			<div>
				Poll Contestants:
				{Array.from({ length: pollsData.amount }).map((_, i) => (
					<div key={i}>
						Contestants 1
						<div>
							<label>Contestants Name(Required)</label>
							<input
								className="text-black"
								onChange={(e) => {
									const data = pollsData;
									const input = e.target.value;
									const field = "contestants_" + i + "_name";
									data[field] = input;
									setPoolsData(data);
								}}
								value={pollsData["contestants_" + i + "_name"]}
								type="text"
							/>
						</div>
						<div>
							<label>Contestants Description(Required)</label>
							<input
								className="text-black"
								value={pollsData["contestants_" + i + "_desc"]}
								onChange={(e) => {
									const data = pollsData;
									const input = e.target.value;
									const field = "contestants_" + i + "_desc";
									data[field] = input;
									setPoolsData(data);
								}}
								type="text"
							/>
						</div>
					</div>
				))}
			</div>
			<div>
				Elections Restrictions (Required):
				<div>
					<label>by Level</label>
					<input
						className="text-black"
						onChange={(e) =>
							setPoolsData({
								...pollsData,
								byLevel: e.target.value
							})
						}
						type="number"
					/>
				</div>
				<div>
					<label>by Department</label>
					<select
						className="text-black"
						onChange={(e) =>
							setPoolsData({
								...pollsData,
								byDept: e.target.value
							})
						}
						label="Select Department"
					>
						<option value="CSE">CSE</option>
						<option value="IT">IT</option>
						<option value="ECE">ECE</option>
						<option value="EEE">EEE</option>
					</select>
				</div>
				<div>
					<label>by Faculty </label>
					<select
						className="text-black"
						onChange={(e) => {
							setPoolsData({
								...pollsData,
								byFaculty: e.target.value
							});
						}}
					>
						<option value="CSE">CSE</option>
						<option value="IT">IT</option>
						<option value="ECE">ECE</option>
						<option value="EEE">EEE</option>
					</select>
				</div>
			</div>
			<div>
				<button
					onClick={() => {
						if (
							pollsData.name &&
							pollsData.desc &&
							pollsData.amount
						) {
							signMessage({ message: stringify(pollsData) });
						} else {
							toast.error("All fields are required");
						}
					}}
				>
					Create Poll
				</button>
			</div>
			<ToastContainer />
		</div>
	);
}
