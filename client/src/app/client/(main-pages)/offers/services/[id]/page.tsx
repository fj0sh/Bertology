"use client";
import React, { useEffect, useState } from "react";
import { formatDateNormal } from "@/lib/function/dateFormatter";
import InputOrange from "@/components/input/inputOrange";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/button/OrangeButton";
import { BookingSchema, BookingType } from "@/lib/util/schema";
import BookingConfirmation from "@/components/Modals/BookingConfirmation";

import axios from "axios";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import { useUser } from "@/providers/UserProvider";

const Booking = ({ params }: { params: { id: string } }) => {
  // const [date, setDate] = useState<Date | null>(new Date());
  // const [bookedDates, setBookedDates] = useState<any[]>([]);
  const [formData, setFormData] = useState<BookingType | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { user } = useUser();

  const [date, setDate] = useState<Date | null>(null); // State to hold the selected date

  const handleDateSelection = (selectedDate: Date) => {
    setDate(selectedDate); // Update the date in the parent state
    console.log("Selected Date:", selectedDate); // You can do other things with the selected date here
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingType>({ resolver: zodResolver(BookingSchema) });

  const onSubmit = async (data: BookingType) => {
    const body = {
      userId: user?.id,
      serviceId: params.id,
      location: data.location,
      fbAccount: data.account,
      contact: data.number,
      serviceRequest: data.service,
      carModel: data.model,
      detail: data.details,
      dateBooked: data.date,
      paymentType: "Cash",
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/booking/`,
        body
      );

      console.log(res.data);
    } catch (error) {
      console.log(error);
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
      <div className="w-full h-screen flex justify-center items-center p-10 gap-[3rem] px-52">
        <div className="w-[60%] h-full flex flex-col justify-center items-center gap-6">
          <div className="flex w-full px-10">
            <PrimeCalendar selectedDate={handleDateSelection} />
          </div>
        </div>
        <div className="w-[40%] h-full">
          <form
            className="w-full h-[90%] text-white bg-black rounded-[15px] p-8 flex flex-col gap-3"
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
              className="resize-none w-full h-full border border-orangePrimary rounded-lg bg-background p-2"
              {...register("details")}
            ></textarea>
            {errors.details && <p>{`${errors.details.message}`} </p>}

            <Button title="Submit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
