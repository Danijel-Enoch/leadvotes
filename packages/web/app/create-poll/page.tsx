"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import bush from "../assets/bush.png";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAccount, useSignMessage } from "wagmi";
import "react-toastify/dist/ReactToastify.css";
import { stringify } from "viem";
import Navbar from "../components/Navbar";
import { createDataIfNotExists } from "@/services/database/database";
import useConvertImage from "@/hooks/useConvertImage";

export default function CreatePollPage() {
  const { image, setFile } = useConvertImage();
  const [pollsData, setPoolsData]: any = useState({
    name: "",
    desc: "",
    img: "",
    amount: 2,
    vote: 0,
    startTime: 0,
    endTime: 0,
    now: Date.now(),
    byFaculty: "NAS",
    byLevel: "ALL",
    byDept: "ALL",
  });
  const { isConnected, address } = useAccount();
  const {
    data: signMessageData,
    error,

    signMessage,
    signMessageAsync,
    variables,
  } = useSignMessage();
  useEffect(() => {
    if (isConnected) {
      let data: any = pollsData;
      data["creator"] = address?.toString();
      setPoolsData(data);
      setFile(pollsData.img[0]);
      data = pollsData;

      if (image) {
        data["img"] = image;
        setPoolsData(data);
        console.log({ image });
      }
    }
  }, [isConnected, address, pollsData]);
  return (
    <main className="flex justify-center  ">
      <section className="lg:max-w-[1400px] w-[95%] lg:mx-[0px] mx-auto lg:w-full">
        <Navbar />

        <div className="lg:w-[80%] w-full mt-[25px] mx-auto ">
          <Image
            src={bush}
            alt="tree-img"
            className="w-full rounded-[40px] h-[100px] lg:h-[276px] "
            data-aos="zoom-in"
          />
          <h1
            className="lg:text-[55px] text-[30px] leading-[50px] lg:leading-[82.5px] mt-[40px] lg:mt-[60px] text-center mb-[15px] lg:mb-[30px]"
            data-aos="zoom-out"
          >
            Create Pool
          </h1>
          <div className="w-fit mx-auto ">
            <div className="flex flex-col ">
              <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  mt-[10px]  ">
                Poll Image (Required)
              </label>
              <input
                onChange={(e) =>
                  setPoolsData({
                    ...pollsData,
                    img: e.target.files,
                  })
                }
                type="file"
              />
            </div>
            <div className="flex flex-col my-[20px] ">
              <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                Poll Name (Required)
              </label>
              <input
                onChange={(e) =>
                  setPoolsData({
                    ...pollsData,
                    name: e.target.value,
                  })
                }
                value={pollsData.name}
                type="text"
                className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
              />
            </div>
            <div className="flex flex-col ">
              <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                Poll Description (Required)
              </label>
              <textarea
                className="outline outline-none bg-[#151515] text-[#00000066] lg:pl-[20px]  pl-[15px] pt-[17px] lg:pt-[20px] rounded-[12px] border-[2px] text-white border-[#939393] lg:w-[510px] h-[140px] lg:h-[180px] w-full "
                onChange={(e) =>
                  setPoolsData({
                    ...pollsData,
                    desc: e.target.value,
                  })
                }
                value={pollsData.desc}
              />
            </div>
            <div className="flex flex-col my-[20px] ">
              <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                Amount Of Contestants(Required)
              </label>
              <input
                onChange={(e) => {
                  setPoolsData({
                    ...pollsData,
                    amount: e.target.value,
                  });
                }}
                value={pollsData.amount}
                type="number"
                className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
              />
            </div>

            <div>
              <h1 className="text-[20px] lg:text-[22px] font-semibold leading-[33px] mb-[10px]  ">
                Poll Contestants:
              </h1>
              {Array.from({ length: pollsData.amount }).map((_, i) => (
                <div key={i}>
                  <h2 className="text-[20px] lg:text-[21px] font-semibold leading-[33px] mb-[10px]  ">
                    Contestants {i + 1}
                  </h2>
                  <div className="flex flex-col ">
                    <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                      Contestants Name(Required)
                    </label>
                    <input
                      onChange={(e) => {
                        const data: any = pollsData;
                        const input = e.target.value;
                        const field = "contestants_" + i + "_name";
                        data[field] = input;
                        setPoolsData(data);
                      }}
                      value={pollsData["contestants_" + i + "_name"]}
                      type="text"
                      className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                    />
                  </div>
                  <div className="flex flex-col my-[20px] ">
                    <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                      Contestants Description(Required)
                    </label>
                    <input
                      value={pollsData["contestants_" + i + "_desc"]}
                      onChange={(e) => {
                        const data = pollsData;
                        const input = e.target.value;
                        const field = "contestants_" + i + "_desc";
                        data[field] = input;
                        setPoolsData(data);
                      }}
                      type="text"
                      className="bg-[#151515] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-[20px] lg:text-[22px] font-semibold leading-[33px] mb-[10px]  ">
                Elections Restrictions (Required):
              </div>
              <div className="flex flex-col ">
                <select
                  className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                  onChange={(e) =>
                    setPoolsData({
                      ...pollsData,
                      Bylevel: e.target.value,
                    })
                  }
                  value={pollsData.Bylevel}
                >
                  <option value="100">100</option>
                  <option value="200">200</option>
                  <option value="300">300</option>
                  <option value="400">400</option>
                  <option value="ALL">ALL</option>
                </select>
              </div>
              <div className="flex flex-col my-[20px] ">
                <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                  By Department
                </label>
                <select
                  className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                  onChange={(e) =>
                    setPoolsData({
                      ...pollsData,
                      byDept: e.target.value,
                    })
                  }
                  value={pollsData.byDept}
                >
                  <option value="CSC">Computer Science</option>
                  <option value="ALL">ALL</option>
                  <option value="SE">Software engineering</option>
                  <option value="CSE">Computer Electronices</option>
                  <option value="EEE">Electrical Electronics </option>
                </select>
              </div>
              <div className="flex flex-col my-[20px] ">
                <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                  Voting Start Time
                </label>
                <select
                  className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                  onChange={(e) =>
                    setPoolsData({
                      ...pollsData,
                      startTime: parseInt(e.target.value),
                    })
                  }
                  value={pollsData.startTime}
                >
                  <option value={Date.now()}>now</option>
                  <option value={30 * 60 * 1000}>next 30 minutes</option>
                  <option value={60 * 60 * 1000}>next 1 hour</option>
                  <option value={2 * 60 * 60 * 1000}>next 2 hours</option>
                  <option value={6 * 60 * 60 * 1000}>next 6 hours</option>
                  <option value={12 * 60 * 60 * 1000}> next 12 hours </option>
                  <option value={24 * 60 * 60 * 1000}>next 24 hours </option>
                  <option value={48 * 60 * 60 * 1000}>next 48 hours </option>
                  <option value={72 * 60 * 60 * 1000}>next 72 hours </option>
                </select>
              </div>
              <div className="flex flex-col my-[20px] ">
                <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                  Voting End Time
                </label>
                <select
                  className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                  onChange={(e) =>
                    setPoolsData({
                      ...pollsData,
                      endTime: parseInt(e.target.value),
                    })
                  }
                  value={pollsData.endTime}
                >
                  <option value={30 * 60 * 1000}>after 30 minutes</option>
                  <option value={60 * 60 * 1000}>after 1 hour</option>
                  <option value={2 * 60 * 60 * 1000}>after 2 hours</option>
                  <option value={6 * 60 * 60 * 1000}>after 6 hours</option>
                  <option value={12 * 60 * 60 * 1000}> after 12 hours </option>
                  <option value={24 * 60 * 60 * 1000}>after 24 hours </option>
                  <option value={48 * 60 * 60 * 1000}>after 48 hours </option>
                  <option value={72 * 60 * 60 * 1000}>after 72 hours </option>
                </select>
              </div>
              <div className="flex flex-col ">
                <label className="text-[20px] lg:text-[20px] font-medium leading-[33px] mb-[10px]  ">
                  By Faculty{" "}
                </label>
                <select
                  className="bg-[#151515] lg:pr-[20px] pr-[7px] rounded-[12px] border-[2px] border-[#939393] mb-[20px] lg:mb-[30px] lg:w-[510px] h-[58px]  lg:h-[58px]  outline outline-none bg-[#151515] text-[#00000066] text-white pl-[15px] rounded-[12px] "
                  onChange={(e) => {
                    setPoolsData({
                      ...pollsData,
                      byFaculty: e.target.value,
                    });
                  }}
                  value={pollsData.byFaculty}
                >
                  <option value="NAS">
                    Faculty Natural and Applied Science
                  </option>
                </select>
              </div>
            </div>
            <div className="w-fit mx-auto mt-[15px] ">
              <button
                className="font-semibold text-[20px] lg:text-[22px] mb-[60px] text-white bg-[#1B5CFE] lg:w-[220px] w-[180px] h-[58px] lg:h-[60px] rounded-[10px] hover:bg-[#1948b5] "
                data-aos="zoom-in"
                onClick={() => {
                  if (pollsData.name && pollsData.desc && pollsData.amount) {
                    signMessageAsync({
                      message: stringify(pollsData),
                    }).then(async (signMessageData) => {
                      await createDataIfNotExists(
                        "polls/" + Math.random().toString(36),
                        pollsData,
                        () => {},
                      ).then(() => {
                        toast.success("Poll created");
                      });
                    });

                    console.log({ signMessageData });
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
        </div>
      </section>
    </main>
  );
}
