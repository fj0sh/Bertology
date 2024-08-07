"use client";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import {
  formatDateForSQL,
  formatDateNormal,
} from "@/lib/function/dateFormatter";
import InputOrange from "@/components/input/inputOrange";
import "@/style/react-calendar.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import instance from "@/lib/util/axios-instance";
import Button from "@/components/button";
import { BookingSchema, BookingType } from "@/lib/util/schema";
import BookingConfirmation from "@/components/Modals/BookingConfirmation";

const Booking = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [bookedDates, setBookedDates] = useState<any[]>([]);
  const [formData, setFormData] = useState<BookingType | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingType>({ resolver: zodResolver(BookingSchema) });

  const onSubmit = (data: BookingType) => {
    if (date) {
      const formData = { ...data, date: formatDateForSQL(date) };
      setFormData(formData);
    } else {
      console.log("No date selected");
    }
    setShowConfirmation(true);
    reset();
  };

  return (
    <>
      <BookingConfirmation
        test={formData?.location}
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
      <div className="w-full h-screen flex justify-center items-center p-10">
        <div className="w-[50%] p-[3rem] px-[5rem] h-full">
          <form
            className="w-full h-full text-white bg-black rounded-[15px] p-8 flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-[25px]">Customer Details</p>
            <InputOrange label="Location:" {...register("location")} />
            {errors.location && <p>{`${errors.location.message}`} </p>}
            <InputOrange
              label="FB Account(Optional):"
              {...register("account")}
            />
            {errors.account && <p>{`${errors.account.message}`} </p>}
            <InputOrange label="Contact Number:" {...register("number")} />
            {errors.number && <p>{`${errors.number.message}`} </p>}
            <InputOrange label="Needed Service:" {...register("service")} />
            {errors.service && <p>{`${errors.service.message}`} </p>}
            <InputOrange label="Car Model:" {...register("model")} />
            {errors.model && <p>{`${errors.model.message}`} </p>}
            <p className="text-[18px]">Additional Details:</p>
            <textarea
              className="resize-none w-full h-full border border-orange rounded-lg bg-background p-2"
              {...register("details")}
            ></textarea>
            {errors.details && <p>{`${errors.details.message}`} </p>}

            <Button title="Submit" type="submit" />
          </form>
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
    </>
  );
};

export default Booking;
