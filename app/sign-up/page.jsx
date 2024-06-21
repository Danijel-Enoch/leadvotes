"use client";
import Image from 'next/image'
import box from '../assets/box.png'
import React, { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "viem";
import Navbar from "../components/Navbar";

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
		<main className='flex justify-center  '>
			<section className='lg:max-w-[1400px] w-[95%] lg:mx-[0px] mx-auto lg:w-full' >
				<Navbar />

				<div className='lg:w-[80%] w-full mt-[25px] mx-auto '>
					<Image src={box} alt='tree-img' className='w-full rounded-[40px] h-[100px] lg:h-[266px] ' data-aos="zoom-in" />
					<h1 className='lg:text-[55px] text-[30px] leading-[50px] lg:leading-[82.5px] mt-[40px] lg:mt-[60px] text-center mb-[15px] lg:mb-[30px]' data-aos="zoom-out">Sign Up</h1>
					<form className="w-fit mx-auto ">
						<div  className="flex flex-col ">
							<label className='text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  '>Email (Required)</label>
							<input
								onChange={(e) =>
									setStudentData({
										...studentData,
										email: e.target.value
									})
								}
								type="text"
								className='bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] '
							/>
						</div>

						<div className="flex flex-col ">
							<label className='text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  '>Matric Number (Required)</label>
							<input
								onChange={(e) =>
									setStudentData({
										...studentData,
										matric: e.target.value
									})
								}
								type="text"
								className='bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] '
							/>
						</div>

						<div className="flex flex-col ">
							<label className='text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  '>Department (Required)</label>
							<input
								onChange={(e) =>
									setStudentData({ ...studentData, dept: e.target.value })
								}
								type="text"
								className='bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] '
							/>
						</div>
						<div className="flex flex-col ">
							<label className='text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  '>Faculty (Required)</label>
							<input
								onChange={(e) =>
									setStudentData({ ...studentData, fac: e.target.value })
								}
								type="text"
								className='bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] '
							/>
						</div>
						<div className="flex flex-col ">
							<label className='text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  '>Level (Required)</label>
							<input
								onChange={(e) =>
									setStudentData({
										...studentData,
										level: e.target.value
									})
								}
								type="text"
								className='bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] '
							/>
						</div>
						<div className="flex flex-col ">
							<label className='text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  '>Name (Required)</label>
							<input
								onChange={(e) =>
									setStudentData({ ...studentData, name: e.target.value })
								}
								type="text"
								className='bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] '
							/>
						</div>
						<div className="w-fit mx-auto mt-[15px] ">
						<button
								className='font-semibold text-[20px] lg:text-[22px] mb-[60px] text-white bg-[#1B5CFE] lg:w-[220px] w-[180px] h-[58px] lg:h-[60px] rounded-[10px] hover:bg-[#1948b5] ' data-aos="zoom-in"
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
						</div>
						<ToastContainer />
					</form>
				</div>
			</section>
		</main>
	);
}
