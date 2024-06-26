const { AceBaseServer } = require("acebase-server");
const dbname = "mydb";
const server = new AceBaseServer(dbname, {
  host: "0.0.0.0", port: 5757, authentication: {
    enabled: true,
    allowUserSignup: false, username: "admin", password: "LACwGeInwAgt@DW9"
  }
});
server.on("ready", () => {
  console.log("SERVER ready");
});

// LACwGeInwAgt@DW9