"use client";
import Image from "next/image";
import box from "../assets/box.png";
import React, { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "viem";
import { createDataIfNotExists } from "../../services/database/database";
import Navbar from "../components/Navbar";
import { sleep } from "@/services/utils";
import useUpload from "@/hooks/useUploadToIpfs";

export default function SignUp() {
	const [studentData, setStudentData] = useState({
		level: "100",
		department: "Computer Science",
		faculty: "Faculty of Applied Science",
		name: "",
		email: "",
		creator: "",
		matric: ""
	});

	const { isConnected, address } = useAccount();
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
	useEffect(() => {
		if (isConnected) {
			let data: any = studentData;
			data["creator"] = address?.toString();
			setStudentData(data);
		}
	}, [isConnected, address, studentData]);
	return (
		<main className="flex justify-center  ">
			<section className="lg:max-w-[1400px] w-[95%] lg:mx-[0px] mx-auto lg:w-full">
				<Navbar />

				<div className="lg:w-[80%] w-full mt-[25px] mx-auto ">
					<Image
						src={box}
						alt="tree-img"
						className="w-full rounded-[40px] h-[100px] lg:h-[266px] "
						data-aos="zoom-in"
					/>
					<h1
						className="lg:text-[55px] text-[30px] leading-[50px] lg:leading-[82.5px] mt-[40px] lg:mt-[60px] text-center mb-[15px] lg:mb-[30px]"
						data-aos="zoom-out"
					>
						Sign Up
					</h1>
					<div className="w-fit mx-auto ">
						<div className="flex flex-col ">
							<label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  ">
								Email (Required)
							</label>
							<input
								onChange={(e) =>
									setStudentData({
										...studentData,
										email: e.target.value
									})
								}
								type="text"
								className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
							/>
						</div>

						<div className="flex flex-col ">
							<label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  ">
								Matric Number (Required)
							</label>
							<input
								onChange={(e) =>
									setStudentData({
										...studentData,
										matric: e.target.value
									})
								}
								type="text"
								className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
							/>
						</div>

						<div className="flex flex-col ">
							<label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
								Department{" "}
							</label>
							<select
								className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
								onChange={(e) => {
									setStudentData({
										...studentData,
										department: e.target.value
									});
								}}
								value={studentData.department}
							>
								<option value="CSC">Computer Science</option>
								<option value="SE">Software engineering</option>
								<option value="CSE">
									Computer Electronices
								</option>
								<option value="EEE">
									Electrical Electronics{" "}
								</option>
							</select>
						</div>
						<div className="flex flex-col ">
							<label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
								Faculty{" "}
							</label>
							<select
								className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
								onChange={(e) => {
									setStudentData({
										...studentData,
										faculty: e.target.value
									});
								}}
								value={studentData.faculty}
							>
								<option value="NAS">
									Faculty Natural and Applied Science
								</option>
							</select>
						</div>
						<div className="flex flex-col ">
							<label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
								Level{" "}
							</label>
							<select
								className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
								onChange={(e) => {
									setStudentData({
										...studentData,
										level: e.target.value
									});
								}}
								value={studentData.level}
							>
								<option value="100">100</option>
								<option value="200">200</option>
								<option value="300">300</option>
								<option value="400">400</option>
							</select>
						</div>
						<div className="flex flex-col ">
							<label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  ">
								Name (Required)
							</label>
							<input
								onChange={(e) =>
									setStudentData({
										...studentData,
										name: e.target.value
									})
								}
								type="text"
								className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
							/>
						</div>
						<div className="w-fit mx-auto mt-[15px] ">
							<button
								className="font-semibold text-[20px] lg:text-[22px] mb-[60px] text-white bg-[#1B5CFE] lg:w-[220px] w-[180px] h-[58px] lg:h-[60px] rounded-[10px] hover:bg-[#1948b5] "
								data-aos="zoom-in"
								onClick={async () => {
									if (studentData) {
										if (
											studentData.creator &&
											isConnected
										) {
											await signMessageAsync({
												message: stringify(studentData)
											})
												.then(
													async (signMessageData) => {
														await createDataIfNotExists(
															"student/voter/" +
																address?.toString(),
															studentData,
															() => {
																toast.success(
																	"Signed up successfully"
																);
															}
														)
															.then(() => {
																toast.success(
																	"Signed up successfully"
																);
															})
															.catch((error) => {
																console.log(
																	error
																);
																if (error) {
																	toast.error(
																		"User Already Exists"
																	);
																} else {
																	toast.error(
																		"Data Exist Already or something went wrong"
																	);
																}
															});
													}
												)
												.catch((error) => {
													toast.error(
														"Signature error Failed"
													);
												});

											if (isSuccess) {
											} else {
											}
										} else {
											toast.error(
												"Please connect your wallet"
											);
										}
									} else {
										toast.error("All fields are required");
									}
								}}
							>
								Sign Up
							</button>
						</div>
						<ToastContainer />
					</div>
				</div>
			</section>
		</main>
	);
}
