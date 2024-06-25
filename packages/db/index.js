const { AceBaseServer } = require("acebase-server");
const dbname = "mydb";
const server = new AceBaseServer(dbname, { host: "0.0.0.0", port: 5757, authentication: { username: "admin", password: "p%ZJRScKJWExx8cp" } });
server.on("ready", () => {
  console.log("SERVER ready");
});

/**
 *   username: admin
[mydb]     password: eX#i1nde!z@wJH9j
 */


/**
     username: admin
[mydb]     password: RyhJ2vNf579FGLZ#
 */