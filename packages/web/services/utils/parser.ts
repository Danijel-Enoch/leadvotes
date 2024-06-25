export function trimWalletAddress(
	address: string,
	startChars = 6,
	endChars = 4
) {
	if (address.length <= startChars + endChars) {
		return address; // Return the full address if it's already short
	}

	const prefix = address.slice(0, startChars);
	const suffix = address.slice(-endChars);

	return `${prefix}...${suffix}`;
}

export function epochToCustomFormat(epoch: number) {
	const date = new Date(epoch * 1000);

	const seconds = String(date.getSeconds()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const hours = String(date.getHours()).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear().toString().slice(-2);

	const format = {
		seconds,
		minutes,
		hours,
		day,
		month,
		year
	};

	return {
		"my-format": `${seconds}-${minutes}-${hours}-${day}-${month}-${year}`,
		format
	};
}
