import instance from "@/lib/util/axios-instance";
import React, { useEffect } from "react";

interface TimeCardProps {
  handleTimeSelect: (slot: string) => void;
  bookedSlots: string[]; // Add booked slots as a prop
}

interface SchedProps {
  slot: string;
  onSelect: (slot: string) => void;
  isBooked: boolean; // Add isBooked to indicate if the slot is booked
}

const SchedCard = ({ slot, onSelect, isBooked }: SchedProps) => {
  return (
    <div
      onClick={!isBooked ? () => onSelect(slot) : undefined} // Disable click if booked
      className={`w-full h-fit text-center font-semibold rounded-sm p-2 border ${
        isBooked
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "border-orangePrimary text-white cursor-pointer hover:bg-orange-500"
      }`}
    >
      {slot}
    </div>
  );
};

const TimeCard = ({ handleTimeSelect, bookedSlots }: TimeCardProps) => {
  const timeSlots = [
    "7:00-8:00",
    "9:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "1:00-2:00",
  ];

  return (
    <div className="p-10 grid grid-cols-4 gap-2">
      {timeSlots.map((slot) => (
        <SchedCard
          key={slot}
          slot={slot}
          onSelect={handleTimeSelect}
          isBooked={bookedSlots.includes(slot)} // Check if slot is booked
        />
      ))}
    </div>
  );
};

export default TimeCard;
