const { AceBaseServer } = require("acebase-server");
const dbname = "mydb";
const server = new AceBaseServer(dbname, { host: "0.0.0.0", port: 5757, });
server.on("ready", () => {
  console.log("SERVER ready");
});

// admin
// AvwtoLsYDL1KhHUp
//
// AvwtoLsYDL1KhHUp
