import instance from "@/lib/util/axios-instance";
import React, { useEffect, useState } from "react";

interface TimeCardProps {
  handleTimeSelect: (slot: string) => void;
  bookedSlots: string[]; // Add booked slots as a prop
  serviceBooked: string;
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
      className={`w-full h-fit text-center text-[18px] font-semibold rounded-md p-2 border-2 ${
        isBooked
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "border-orangePrimary text-white cursor-pointer hover:bg-orange-500"
      }`}
    >
      {slot}
    </div>
  );
};

const TimeCard = ({
  serviceBooked,
  handleTimeSelect,
  bookedSlots,
}: TimeCardProps) => {
  const timeSlotsForMultiple = [
    "7:00-10:00",
    "10:00-1:00",
    "1:00-4:00",
    "4:00-7:00",
  ];

  const timeSlotForSingle = [
    "7:00-8:00",
    "8:00-9:00",
    "9:00-10:00",
    "10:00-11:00",
  ];

  // const timeSlots = ["7:00-10:00", "10:00-1:00", "1:00-4:00", "4:00-7:00"];

  const [timeType, setTimeType] = useState<string[]>([]);

  useEffect(() => {
    if (serviceBooked === "MULTIPLE") {
      setTimeType(timeSlotsForMultiple);
    } else {
      setTimeType(timeSlotForSingle);
    }
  }, [serviceBooked]);

  return (
    <>
      <div className="p-5 grid grid-cols-4 gap-3">
        {timeType.map((slot) => (
          <SchedCard
            key={slot}
            slot={slot}
            onSelect={handleTimeSelect}
            isBooked={bookedSlots.includes(slot)} // Check if slot is booked
          />
        ))}
      </div>
    </>
  );
};

export default TimeCard;
