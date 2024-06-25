import React, { useEffect } from "react";

export default function useConvertImage() {
	const [image, setImage]: any = React.useState("");
	const [file, setFile]: any = React.useState("");

	async function convertImage() {
		return new Promise(function (resolve, reject) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64String = reader.result?.toString().split(",")[1]; // Extract base64 part
				//console.log({ base64String });
				resolve(base64String);
			};
			reader.onerror = (error) => reject(error);
			reader.readAsDataURL(file);
		});
	}
	useEffect(() => {
		convertImage().then((res) => {
			setImage(res);
			// console.log({ res });
		});
	});
	return { image, setFile };
}
