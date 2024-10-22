import React from "react";

interface schedProps {
  slot: string;
}

const SchedCard = (props: schedProps) => {
  const { slot } = props;
  return (
    <div className="w-full h-fit text-center font-semibold rounded-sm p-2 border border-orangePrimary text-white">
      {slot}
    </div>
  );
};

const TimeCard = () => {
  return (
    <div className=" p-10 grid grid-cols-4 gap-2">
      <SchedCard slot="7:00-8:00" />
      <SchedCard slot="9:00-10:00" />
      <SchedCard slot="10:00-11:00" />
      <SchedCard slot="11:00-12:00" />
      <SchedCard slot="1:00-2:00" />
    </div>
  );
};

export default TimeCard;
