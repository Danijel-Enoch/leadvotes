import { NFTStorage } from "nft.storage";
import { useStorageUpload } from "@thirdweb-dev/react";

const NFT_STORAGE_TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY2NDI2N0RGNTQwMENkMjExMjZiMWUzNmQ1QzJBNWFFZjIzZDE1MDAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcxNzM1MTcwMzIzNywibmFtZSI6Im1lbWVmdW4ifQ.aoHLcGQpwaCpfH--2JDQNygmPh_Y83CD5Z9y-1CGl6U";

export default function useUpload() {
	const { mutateAsync: upload } = useStorageUpload();
	// const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
	// const someData = new Blob(["hello world"]);

	async function uploadMetaData(data: any) {
		const cid = await upload({ data: [data] });
		console.log({ cid });
		return cid;
	}
	async function convertImageToBase64(input: any) {
		const file = input.target.files[0];
		let b64;
		const reader = new FileReader();

		return new Promise((resolve, reject) => {
			reader.onloadend = function () {
				//  const base64Image = reader.result;

				resolve(file);
			};

			reader.onerror = function () {
				reject(new Error("Failed to read file"));
			};

			reader.readAsDataURL(file);
		});
	}

	return { uploadMetaData, convertImageToBase64 };
}
