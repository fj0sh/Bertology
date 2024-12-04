import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import instance from "@/lib/util/axios-instance";
import "./style.css";

interface Props {
  selectedDate?: (date: string) => void;
  setDisable?: boolean;
}

const PrimeCalendar = (props: Props) => {
  const { selectedDate, setDisable = true } = props;

  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [currentSelectedDate, setCurrentSelectedDate] = useState<Date | null>(
    null
  );

  useEffect(() => {
    const fetchFullyBookedDates = async () => {
      try {
        const res = await instance.get(
          `${process.env.NEXT_PUBLIC_URL}/services/booked-dates`
        );

        const disableDates = res.data.map((booked: any) => {
          return new Date(booked.bookingDate);
        });

        setBookedDates(disableDates);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFullyBookedDates();
  }, []);

  const handleDateChange = (e: any) => {
    console.log(e.value);
    if (selectedDate && e.value) {
      setCurrentSelectedDate(e.value);
      selectedDate(e.value);
    }
  };

  const today = new Date();

  return (
    <>
      <Calendar
        value={currentSelectedDate}
        className="custom-calendar w-full h-full"
        inline
        disabledDates={setDisable ? bookedDates : []}
        onChange={handleDateChange}
        minDate={setDisable ? today : undefined}
        pt={{
          yearTitle: { className: "px-4" },
          header: { className: "bg-orangeRed text-white" },
          panel: { className: "bg-white border-white text-background" },
        }}
      />
    </>
  );
};

export default PrimeCalendar;
