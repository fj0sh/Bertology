"use client";
import React, { useEffect, useState } from "react";
import {
  formatDateForSQL,
  formatDateNormal,
} from "@/lib/function/dateFormatter";
import InputOrange from "@/components/input/inputOrange";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/button/OrangeButton";
import { BookingSchema, BookingType } from "@/lib/util/schema";
import BookingConfirmation from "@/components/Modals/BookingConfirmation";

import axios from "axios";
import PrimeCalendar from "@/components/cards/calendar/Calendar";
import { useUser } from "@/providers/UserProvider";
import Dropdown from "@/components/input/DropDown";
import useBooking from "@/hooks/requests/useBooking";

const Booking = ({ params }: { params: { id: string } }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState<BookingType | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingType>({ resolver: zodResolver(BookingSchema) });

  const { user } = useUser();
  const { bookService, getServiceById } = useBooking();

  const userID = parseInt(user?.id!);

  const onSubmit = async (data: BookingType) => {
    if (!selectedDate) {
      console.log("BOBO");
    }

    bookService(
      userID,
      parseInt(params.id),
      data.location,
      data.account!,
      parseInt(data.number),
      data.service,
      data.model,
      data.details,
      formatDateForSQL(selectedDate),
      1
    );
    setShowConfirmation(true);
    reset();
  };

  const handleDate = (date: any) => {
    console.log(date);
    setSelectedDate(date);
  };

  useEffect(() => {
    getServiceById(parseInt(params.id));
  }, [getServiceById, params.id]);

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
            <PrimeCalendar selectedDate={handleDate} />
          </div>
        </div>
        <div className="w-[40%]">
          <form
            className="w-full h-[90%] text-white bg-black rounded-[15px] p-8 flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p className="text-[25px]">Customer Details</p>
              <InputOrange label="Location:" {...register("location")} />
              {errors.location && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.location.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange
                label="FB Account(Optional):"
                {...register("account")}
              />
              {errors.account && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.account.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange label="Contact Number:" {...register("number")} />
              {errors.number && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.number.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange label="Needed Service:" {...register("service")} />
              {errors.service && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.service.message}`}
                </p>
              )}
            </div>

            <div>
              <InputOrange label="Car Model:" {...register("model")} />
              {errors.model && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.model.message}`}
                </p>
              )}
            </div>

            <div>
              <p className="text-[18px]">Additional Details:</p>
              <textarea
                className="resize-none w-full h-full border border-orangePrimary rounded-lg bg-background p-2"
                {...register("details")}
              ></textarea>
              {errors.details && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.details.message}`}
                </p>
              )}
            </div>

            <Button title="Submit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
