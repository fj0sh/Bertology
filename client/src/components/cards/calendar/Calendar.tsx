import React, { useEffect, useState } from "react";
import { Calendar } from "primereact/calendar";
import axios from "axios";

interface Props {
  disable?: boolean;
  selectedDate?: (date: Date) => void; // Update type to accept a Date argument
}

const PrimeCalendar = (props: Props) => {
  const { disable, selectedDate } = props;

  const [bookedDates, setBookedDates] = useState<Date[]>([]);

  useEffect(() => {
    const fetchBookedDates = async () => {
      try {
        const res = await axios.get(
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
      selectedDate(e.value as Date); // Ensure the selected date is passed up
    }
  };

  return (
    <Calendar
      className="w-full h-full"
      inline
      disabledDates={bookedDates}
      disabled={disable}
      onChange={handleDateChange} // Use custom change handler
      pt={{
        yearTitle: { className: "px-4" },
        header: { className: "bg-orangeRed text-white " },
        panel: { className: "bg-white border-white text-background" },
      }}
    />
  );
};

export default PrimeCalendar;
