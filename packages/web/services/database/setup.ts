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
	await db.auth.signIn("admin", "9B9oFuKfeH%ATtJy");
}

InitAnAuthDb()
	.then((res) => {
		console.log(res);
	})
	.catch((err) => console.log(err));

export { db as database };

/**
 * 52.41.36.82
54.191.253.12
44.226.122.3
 */

/**
 *  username: admin
[mydb]     password: zJQwmThDjpLzCiDG
 */
