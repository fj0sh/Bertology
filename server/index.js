require("./config/db-config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

const authRoute = require("./routes/auth.route");
const testRoute = require("./routes/test.route");
const usersRoute = require("./routes/users.router");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log("Currently in PORT " + PORT);
});
