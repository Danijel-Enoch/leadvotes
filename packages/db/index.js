const { AceBaseServer } = require("acebase-server");
const dbname = "mydb";
const server = new AceBaseServer(dbname, { host: "localhost", port: 5757, authentication: false });
server.on("ready", () => {
  console.log("SERVER ready");
});

// admin
// AvwtoLsYDL1KhHUp
//
// AvwtoLsYDL1KhHUp
