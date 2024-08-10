import React from "react";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-date-picker/dist/DatePicker.css";

const DatePickerComponent = () => {
  return (
    <div>
      <DatePicker />
    </div>
  );
};

const TimePickerComponent = () => {
  return (
    <div>
      <TimePicker />
    </div>
  );
};

export { DatePickerComponent, TimePickerComponent };
