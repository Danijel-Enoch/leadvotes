import { readData } from "@/services/database/database";
import React, { useEffect, useState } from "react";

export default function useGetVotingPollsData() {
	const [polls, setPolls]: any = useState({});
	useEffect(() => {
		const data = readData("polls/").then((data) => {
			setPolls(data.val());
			//console.log({ data: data.val() });
		});
	}, []);

	return {
		polls: Object.values(polls),
		pollsKeys: Object.keys(polls),
		pollsInFull: polls
	};
}
