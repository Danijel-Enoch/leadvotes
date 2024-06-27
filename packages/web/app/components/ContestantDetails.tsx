"use client";
import React, { useEffect, useState } from "react";
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

const ContestantDetails = ({
  contestants,
  campaingId,
  pollStartTime,
  pollEndTime,
}: any) => {
  async function handleNumberOfVotes(contestantsName: string) {
    let numberOfVotes = 0;
    const data = await readData("votes/" + campaingId);

    Object.entries(data.val()).map(([key, value]: any) => {
      console.log(value.name, contestantsName);
      if (value.name === contestantsName) {
        numberOfVotes++;
      }
    });

    return numberOfVotes;
  }
  const { address, isConnected } = useAccount();

  const {
    data: signMessageData,
    error,
    isSuccess,
    isIdle,
    isPending,
    signMessage,
    variables,
    signMessageAsync,
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

  const [constestantFullData, setContestantFullData]: any = useState([]);

  const votes: VotingData[] = VotingDetails;

  useEffect(() => {
    if (isConnected) {
    }
    // get all contesants name
  }, [isConnected, address]);
  useEffect(() => {
    const xdata = listOfContestantsKeys.map(async (data) => {
      let x = 0;
      const ddata = await readData("votes/" + campaingId);

      console.log({ ddata });

      if (ddata.exists())
        Object.entries(ddata.val()).map(([key, value]: any) => {
          console.log(value.name, data.name);
          if (value.name === data.name) {
            x++;
          }
        });

      return {
        name: data.name,
        desc: data.desc,
        votes: x,
      };
    });
    Promise.all(xdata)
      .then((results) => {
        //	console.log({ results });
        setContestantFullData(results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [contestants]);

  async function handleVoting(contestantsName: string) {
    //sign transactions
    if (isConnected) {
      const data = await readData(
        "votes/" + campaingId + "/" + address?.toString(),
      );
      const votersData = await readData("student/voter/" + address?.toString());
      if (votersData.exists()) {
        if (data.exists()) {
          toast.error("You have already voted for " + data.val().name);
        } else {
          await signMessageAsync({
            message: "Vote for " + contestantsName,
          })
            .then(async () => {
              // find users votes for campaing and see who qwas voted for

              console.log("signed message");
              await createDataIfNotExists(
                "votes/" + campaingId + "/" + address?.toString(),
                { name: contestantsName },
                () => {},
              )
                .then((res) => toast.success("Voted for " + contestantsName))
                .catch((err) => {
                  console.log({ err });
                  toast.error("Failed to vote for " + contestantsName);
                });
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
        {constestantFullData.length > 0 &&
          constestantFullData.map((vote: any, index: any) => (
            <section key={index}>
              <div className="grid grid-cols-1 w-full justify-between lg:mb-[0px] ">
                <div
                  className="flex lg:flex-row lg:w-fit w-[95%] mx-auto flex-col-reverse mb-[50px] lg:mb-[60px] "
                  data-aos="fade-up"
                  data-duration="1500"
                >
                  <Image
                    src={brown}
                    alt="desert"
                    className="lg:w-[347px] mt-[20px] lg:mt-[0px] lg:mr-[10px] w-[80%] lg:mx-[0px] mx-auto"
                  />
                  <div className="w-[80%] lg:mx-[0px] mx-auto lg:w-[280px] bg-[#151515] rounded-[25px] pt-[28px] px-[30px] ">
                    <h1 className="text-[15px] font-semibold leading-[30px] text-center ">
                      {vote.name}
                    </h1>
                    <div className="flex my-[20px] w-fit mx-auto">
                      <p className="my-auto text-[14px] font-semibold leading-[21px] ml-[11px] ">
                        {vote.desc}
                      </p>
                    </div>
                    <div className="flex my-[20px] w-fit mx-auto">
                      <p className="my-auto text-[14px] font-semibold leading-[21px] ml-[11px] ">
                        {vote.votes} Votes
                      </p>
                    </div>
                    <button
                      disabled={
                        pollEndTime > Date.now() || pollStartTime < Date.now()
                          ? true
                          : false
                      }
                      onClick={async () =>
                        await handleVoting(vote.name as unknown as string)
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
