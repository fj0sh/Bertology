import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import axios from "axios";
import instance from "@/lib/util/axios-instance";

interface Props {
  disable?: boolean;
  selectedDate?: (date: Date) => void;
}

const PrimeCalendar = (props: Props) => {
  const { disable, selectedDate } = props;

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
          return new Date(booked.dateBooked.split("T")[0]);
        });

        setBookedDates(disableDates);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookedDates();
  }, []);

  const handleDateChange = (e: any) => {
    if (selectedDate && e.value) {
      setCurrentSelectedDate(e.value); // Update the selected date state
      selectedDate(e.value as Date); // Pass selected date up to parent
    }
  };

  return (
    <>
      {/* Inline style for highlighting selected date */}
      <style jsx>{`
        .custom-calendar .p-highlight {
          background-color: #fe4500 !important; /* Tomato color for selected date */
          color: white !important; /* Ensure text remains readable */
          border-radius: 50%; /* Make the selected date circular */
        }
      `}</style>

      <Calendar
        value={currentSelectedDate} // Control the selected date value
        className="custom-calendar w-full h-full"
        inline
        disabledDates={bookedDates}
        disabled={disable}
        onChange={handleDateChange} // Custom date change handler
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
