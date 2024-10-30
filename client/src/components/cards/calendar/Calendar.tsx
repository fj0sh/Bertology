import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import instance from "@/lib/util/axios-instance";
import "./style.css";

interface Props {
  selectedDate?: (date: Date) => void;
}

const PrimeCalendar = (props: Props) => {
  const { selectedDate } = props;

  const [bookedDates, setBookedDates] = useState<Date[]>([]);
  const [currentSelectedDate, setCurrentSelectedDate] = useState<Date | null>(
    null
  );

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const res = await instance.get(
          `${process.env.NEXT_PUBLIC_URL}/services/booked-dates`
        );

        const disableDates = res.data.map((booked: any) => {
          return new Date(booked.bookedDate);
        });

        setBookedDates(disableDates);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookedDates();
  }, []);

  const handleDateChange = (e: any) => {
    console.log(e.value);
    if (selectedDate && e.value) {
      setCurrentSelectedDate(e.value); // Update the selected date state
      selectedDate(e.value as Date); // Pass selected date up to parent
    }
  };

  const today = new Date(); // Get today's date

  return (
    <>
      <Calendar
        value={currentSelectedDate} // Control the selected date value
        className="custom-calendar w-full h-full"
        inline
        disabledDates={bookedDates}
        onChange={handleDateChange} // Custom date change handler
        minDate={today} // Disable past dates
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
