import { AceBaseClient } from "acebase-client";

let db = new AceBaseClient({
	host: "bluevotes.onrender.com",
	port: 443,
	dbname: "mydb",
	https: true
});

// Initialize Acebase and authenticate
async function InitAnAuthDb() {
	await db.ready();
	await db.auth.signIn("admin", "LACwGeInwAgt@DW9");
}

InitAnAuthDb()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err));

export { db as database };
