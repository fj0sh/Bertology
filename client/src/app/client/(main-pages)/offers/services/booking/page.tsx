"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
  formatDateForSQL,
  formatDateNormal,
} from "@/lib/function/dateFormatter";
import InputOrange from "@/components/input/inputOrange";
import "@/style/react-calendar.css";
import instance from "@/lib/util/axios-instance";

const Booking = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [test, setTest] = useState(0);
  const [bookedDates, setBookedDates] = useState<any[]>([]);

  const newDate = formatDateNormal(date);

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const res = await instance.get("/services/booked-dates");
        setBookedDates(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookedDates();
  }, []);

  const tileDisabled = ({ date }: { date: Date }) => {
    return bookedDates.some(
      (bookedDate) =>
        new Date(bookedDate.dateBooked).toDateString() === date.toDateString()
    );
  };

  return (
    <div className="w-full h-screen flex justify-center items-center p-10">
      <div className="w-[50%] p-[3rem] px-[5rem] h-full">
        <div className="w-full h-full text-white bg-black rounded-[15px] p-8 flex flex-col gap-3">
          <p className="text-[25px]">Customer Details</p>
          <InputOrange
            label="Location:"
            onChange={(e) => setTest(e.target.value)}
          />
          <InputOrange label="FB Account(Optional):" />
          <InputOrange label="Contact Number:" />
          <InputOrange label="Needed Service:" />
          <InputOrange label="Car Model:" />
          <p className="text-[18px]">Additional Details:</p>
          <textarea className="resize-none w-full h-full border border-orange rounded-lg bg-background p-2"></textarea>
        </div>
      </div>
      <div className="w-[50%] flex flex-col justify-center items-center gap-10">
        <div className="flex gap-3 text-white text-[22px] items-center">
          <p>Selected Date:</p>
          <div className="text-[18px]">{newDate}</div>
        </div>
        <div className="w-[30rem] h-[40rem]">
          <Calendar
            className={""}
            onChange={(value) => setDate(value as Date)}
            tileDisabled={tileDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
