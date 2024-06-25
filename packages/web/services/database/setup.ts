import { AceBaseClient } from "acebase-client";

let db = new AceBaseClient({
  host: "localhost",
  port: 5757,
  dbname: "myDb",
  https: false,
});

// Initialize Acebase and authenticate
async function InitAnAuthDb() {
  await db.ready();
  await db.auth.signIn("admin", "AvwtoLsYDL1KhHUp");
}

InitAnAuthDb()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

export { db as database };
