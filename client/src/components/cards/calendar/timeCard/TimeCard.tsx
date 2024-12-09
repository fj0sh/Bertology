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
  isSelected: boolean; // Add isSelected to indicate if the slot is selected for booking
}

const SchedCard = ({
  slot,
  onSelect,
  isBooked,
  isSelected,
}: SchedProps & { isSelected: boolean }) => {
  return (
    <div
      onClick={!isBooked ? () => onSelect(slot) : undefined} // Disable click if booked
      className={`w-full h-fit text-center text-[18px] font-semibold rounded-md p-2 border-2 ${
        isBooked
          ? "bg-gray-300 text-gray-500 cursor-not-allowed border-orangePrimary"
          : isSelected
          ? "bg-orange-500 text-white"
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
  const [timeType, setTimeType] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    //3-5
    //3-hours services
    const timeSlotsForMultiple = [
      "8:00-10:00",
      "10:00-1:00",
      "1:00-4:00",
      "4:00-7:00",
    ];

    //1-2
    //1 hour services
    const timeSlotForSingle = [
      "8:00-9:00",
      "9:00-10:00",
      "10:00-11:00",
      "11:00-12:00",
      "1:00-2:00",
      "2:00-3:00",
      "3:00-4:00",
      "4:00-5:00",
    ];
    if (serviceBooked === "MULTIPLE") {
      setTimeType(timeSlotsForMultiple);
    } else {
      setTimeType(timeSlotForSingle);
    }
  }, [serviceBooked]);

  const countOccurrences = (slot: string): number => {
    return bookedSlots.filter((bookedSlot) => bookedSlot === slot).length;
  };

  const handleSelect = (slot: string) => {
    setSelectedSlot(slot);
    handleTimeSelect(slot);
  };

  return (
    <div className="p-5 grid lg:grid-cols-4 sm:grid-cols-4 gap-3">
      {timeType.map((slot) => (
        <SchedCard
          key={slot}
          slot={slot}
          onSelect={handleSelect}
          isBooked={countOccurrences(slot) >= 2}
          isSelected={slot === selectedSlot}
        />
      ))}
    </div>
  );
};

export default TimeCard;
