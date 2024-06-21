"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import React, { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "viem";

export default function SignUp() {
	const [studentData, setStudentData] = useState({});
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
			setStudentData(data);
		}
		isLoading ? toast.info("Please wait...") : null;
	}, [isConnected, address, studentData]);
	return (
		<div>
			<ConnectButton />
			<h1>Sign Up</h1>

			<div>
				<label>Email (Required)</label>
				<input
					onChange={(e) =>
						setStudentData({
							...studentData,
							email: e.target.value
						})
					}
					type="text"
				/>
			</div>

			<div>
				<label>Matric Number (Required)</label>
				<input
					onChange={(e) =>
						setStudentData({
							...studentData,
							matric: e.target.value
						})
					}
					type="text"
				/>
			</div>

			<div>
				<label>Department (Required)</label>
				<input
					onChange={(e) =>
						setStudentData({ ...studentData, dept: e.target.value })
					}
					type="text"
				/>
			</div>
			<div>
				<label>Faculty (Required)</label>
				<input
					onChange={(e) =>
						setStudentData({ ...studentData, fac: e.target.value })
					}
					type="text"
				/>
			</div>
			<div>
				<label>Level (Required)</label>
				<input
					onChange={(e) =>
						setStudentData({
							...studentData,
							level: e.target.value
						})
					}
					type="text"
				/>
			</div>
			<div>
				<label>Name (Required)</label>
				<input
					onChange={(e) =>
						setStudentData({ ...studentData, name: e.target.value })
					}
					type="text"
				/>
			</div>
			<button
				onClick={() => {
					if (
						studentData.matric &&
						studentData.name &&
						studentData.falcuty
					) {
						signMessage({ message: stringify(studentData) });
					} else {
						toast.error("All fields are required");
					}
				}}
			>
				Sign Up
			</button>
			<ToastContainer />
		</div>
	);
}
