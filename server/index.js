require("./config/db-config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

const cron = require("./jobs/booking");

const authRoute = require("./routes/auth.route");
const testRoute = require("./routes/test.route");
const usersRoute = require("./routes/users.router");
const productsRoute = require("./routes/products.route");
const servicesRoute = require("./routes/services.route");
const bookingRoute = require("./routes/booking.route");
const cartRoute = require("./routes/cart.route");
const installerRoute = require("./routes/installer.route");
const mailerRoute = require("./routes/mailer/mailer.route");
const inquiryRoute = require("./routes/inquiries.route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// cron();

app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/services", servicesRoute);
app.use("/api/booking", bookingRoute);
app.use("/api/cart", cartRoute);
app.use("/api/mail", mailerRoute);
app.use("/api/installer", installerRoute);
app.use("/api/inquiries", inquiryRoute);

app.listen(PORT, () => {
  console.log("Currently in PORT " + PORT);
});
