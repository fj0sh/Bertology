const cron = require("node-cron");
const { markMissedBookings } = require("../model/booking.model");

module.exports = () => {
  cron.schedule("*/5  * * * *", () => {
    // cron.schedule("* * * * * *", () => {
    //   cron.schedule("0 0 * * *", () => {
    console.log("Running cron job to mark missed bookings...");
    console.log(
      "Marking DateTime:",
      new Date().toISOString().split("T").join(" ")
    );

    markMissedBookings((err, result) => {
      if (err) {
        console.error("Error marking missed bookings:", err);
      } else {
        console.log(
          "Missed bookings updated successfully:",
          result.affectedRows
        );
      }
    });
  });
};
