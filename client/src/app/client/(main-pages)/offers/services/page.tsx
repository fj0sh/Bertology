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

import PrimeCalendar from "@/components/cards/calendar/Calendar";
import useBooking from "@/hooks/requests/useBooking";
import Swal from "sweetalert2";
import ImageUpload from "@/components/input/ImageUpload";
import Dropdown from "@/components/input/DropDown";
import useServices from "@/hooks/requests/useServices";

import Locations from "@/constants/Cebuprovinces";
import Image from "next/image";

import carModels from "@/constants/CarModel";
import TimeCard from "@/components/cards/calendar/timeCard/TimeCard";
import useMailer from "@/hooks/mailer/useMailer";
import Cookies from "universal-cookie";

import { MultiSelect } from "primereact/multiselect";

const Booking = () => {
  const [selectedBookingDate, setSelectedBookingDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedService, setSelectedService] = useState([]);
  const [bookedSlot, setBookedSlot] = useState([]);
  const [serviceBooked, setServiceBooked] = useState("");
  const [formData, setFormData] = useState<BookingType | null>(null);
  const [generatedOTP, setGeneratedOTP] = useState(0);
  const [userOTP, setUserOTP] = useState("");

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentProof, setPaymentProof] = useState("");
  const [serviceType, setServiceType] = useState();
  const [downPayment, setDownPayment] = useState<any | undefined>(undefined);
  const [municipality, setMunicipality] = useState();
  const [barangay, setBarangay] = useState([]);
  const [imageLarger1, setIsImageLarger1] = useState(false);
  const [imageLarger2, setIsImageLarger2] = useState(false);
  const [serviceMode, setServiceMode] = useState("onsite");
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModelShow, setIsModelShow] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<BookingType>({ resolver: zodResolver(BookingSchema) });

  const { data, bookService, selectTypes } = useBooking();
  const { tanstackData, dateInfo, getDateInformation } = useServices();
  const { sendMail } = useMailer();
  const customModel = watch("model");

  const cookies = new Cookies();

  useEffect(() => {
    if (customModel) {
      setSelectedModel("");
      setIsModelShow(false);
    } else {
      setIsModelShow(true); // Restore "Car Model" input if Custom Model is cleared
    }
  }, [customModel]);

  useEffect(() => {
    const allModels: string[] = [];
    carModels.map((model) => {
      let brands = model.brand;
      let models = model.models;

      models.map((res: string) => allModels.push(`${brands} ${res}`));
    });

    setModels(allModels);
  }, []);

  let filteredModels = models.filter((model) =>
    model.toLowerCase().includes(selectedModel.toLowerCase())
  );

  const municipalityList = Object.keys(Locations.CEBU.municipality_list).map(
    (test: any) => {
      return test;
    }
  );

  useEffect(() => {
    if (municipality) {
      const barangays = Locations.CEBU.municipality_list[municipality] || [];
      setBarangay(barangays?.barangay_list); // Update barangay list
    } else {
      setBarangay([]); // Reset barangay list if no municipality is selected
    }
  }, [municipality]);

  const noDateSelected = () => {
    Swal.fire({
      title: "Error",
      text: "Please select a date and time for booking",
      icon: "error",
    });
  };

  const successfulBooking = () => {
    Swal.fire({
      title: "Booking Successful",
      text: "Please wait a confirmation from the admin",
      icon: "success",
    });
    setShowConfirmation(false);
    reset();
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedModel(e.target.value);
    setShowDropdown(true); // Show the dropdown when typing
  };

  const handleModelSelect = (model: string) => {
    setSelectedModel(model); // Set the selected model
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const onSubmit = (data: BookingType) => {
    if (!selectedBookingDate || !selectedTimeSlot) {
      setIsSubmitting(false);
      noDateSelected();
    } else {
      setFormData(data);
      const OTP = Math.floor(Math.random() * (999999 - 100000) + 100000);
      setGeneratedOTP(OTP);
      sendMail(
        "Bertology Booking OTP",
        data.email,
        `<p>Your OTP is ${OTP}</p>`,
        `${data.firstName} ${data.lastName}`
      );
      cookies.set("OTP", OTP, { maxAge: 60 * 5 });
      setShowConfirmation(true);
    }
  };

  const OTPVerification = async () => {
    const otp = parseInt(cookies.get("OTP"));
    if (parseInt(userOTP) === otp) {
      setShowConfirmation(false);
      reset();
      successfulBooking();

      if (formData) {
        const bookingResponse = await bookService(
          formData.firstName,
          formData.lastName,
          formData.email,
          parseInt(formData.number),
          municipality!,
          barangay.toString(),
          formData.landmark!,
          selectedModel !== "" ? selectedModel : formData.model || "",
          formData.details,
          paymentProof,
          `${
            formatDateForSQL(selectedBookingDate).split(" ")[0]
          } ${selectedTimeSlot}`,
          serviceMode,
          formData.street
        );

        const insertId = bookingResponse.insertId;
        selectedService.map((res: any) => selectTypes(insertId, res.id));
      }
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid OTP",
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (selectedService.length > 1) {
      setServiceBooked("MULTIPLE");
    } else {
      setServiceBooked("SINGLE");
    }
  }, [selectedService]);

  const handleDate = (date: string) => {
    getDateInformation(formatDateForSQL(date).split(" ")[0]);
    setSelectedBookingDate(date);
  };

  useEffect(() => {
    if (dateInfo.length > 0) {
      const slots: any = dateInfo.map(
        (res: any) => res.bookedDate.split(" ")[1]
      );
      setBookedSlot(slots);
    } else {
      setBookedSlot([]);
    }
  }, [dateInfo, isSubmitting]);

  const handleTimeSelect = (slot: string) => {
    setSelectedTimeSlot(slot);
  };

  const handleImageClick1 = () => {
    setIsImageLarger1(!imageLarger1);
  };
  const handleImageClick2 = () => {
    setIsImageLarger2(!imageLarger2);
  };

  useEffect(() => {
    let baseDownPayment = 0;
    selectedService.map(
      (result: any) => (baseDownPayment += result.servicePrice)
    );
    setDownPayment(Math.ceil(baseDownPayment * 0.3));
  }, [selectedService]);

  if (isSubmitting) {
    Swal.fire({
      title: "Processing Your Booking",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  return (
    <>
      <div className="transition-all duration-1000 ease-in-out mt-10">
        <BookingConfirmation
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          verifyOTP={OTPVerification}
          setUserOTP={setUserOTP} // Pass the setUserOTP function
        />
      </div>
      <div className="w-full h-full flex justify-center p-10 gap-x-[10rem]">
        <div className="w-full h-full items-end flex flex-col gap-8 mt-[5rem]">
          <div className="text-white self-center flex items-center gap-2">
            <p className="font-bold text-[18px]">Selected Date:</p>
            {selectedBookingDate
              ? `${formatDateNormal(selectedBookingDate)} (${selectedTimeSlot})`
              : "Please Select a Date"}
          </div>
          <div className="flex w-[80%] px-10 items-center justify-center">
            <PrimeCalendar selectedDate={handleDate} />
          </div>
          <div className="self-end">
            <p className="text-white font-semibold text-[20px]">Time Slots:</p>

            <TimeCard
              handleTimeSelect={handleTimeSelect}
              bookedSlots={bookedSlot}
              serviceBooked={serviceBooked}
            />
          </div>
        </div>
        <div className="w-full">
          <form
            className="w-full text-white bg-black rounded-[15px] p-8 flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-[30px] font-semibold text-orangeRed">
              Service Detail
            </p>

            <div className="flex gap-4">
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="onsite"
                  name="serviceType"
                  value="onsite"
                  checked={serviceMode === "onSite"} // Ensure it stays selected
                  onChange={() => setServiceMode("onSite")}
                />
                <label htmlFor="onsite">On-Site</label>
              </div>
              <div className="flex gap-2">
                <input
                  type="radio"
                  id="homeService"
                  name="serviceType"
                  value="homeService"
                  checked={serviceMode === "homeService"} // Reflect state change
                  onChange={() => setServiceMode("homeService")}
                />
                <label htmlFor="homeService">Home Service</label>
              </div>
            </div>

            <div className="flex w-full gap-8">
              <div className="w-full">
                <InputOrange label="First Name:" {...register("firstName")} />
                {errors.firstName && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.firstName?.message}`}
                  </p>
                )}
              </div>
              <div className="w-full">
                <InputOrange label="Last Name:" {...register("lastName")} />
                {errors.lastName && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.lastName?.message}`}
                  </p>
                )}
              </div>
            </div>

            <div className="flex w-full gap-8 *:w-full">
              <div>
                <InputOrange label="Email:" {...register("email")} />
                {errors.email && (
                  <p className="text-red-500 text-[13px]">
                    {`${errors.email.message}`}
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
            </div>

            <div
              className={`transition-all duration-1000 ease-in-out ${
                serviceMode !== "homeService"
                  ? "max-h-0 opacity-0 overflow-hidden"
                  : "max-h-[500px] opacity-100"
              }`}
            >
              {serviceMode === "homeService" ? (
                <>
                  <div className="flex gap-8 w-full justify-around">
                    <div className="p-1 flex flex-col gap-2 w-full">
                      <p className="text-[18px] self-start">Municipality:</p>
                      <Dropdown
                        options={municipalityList}
                        title="Municipality"
                        onSelect={(selected) => setMunicipality(selected)}
                        getOptionLabel={(types) => types}
                        getOptionKey={(types) => types}
                      />
                    </div>
                    <div className="p-1 flex flex-col gap-2 w-full">
                      <p className="text-[18px] self-start">Barangay:</p>
                      <Dropdown
                        disabled={!municipality}
                        options={barangay}
                        title="Barangay"
                        onSelect={(selected) => setBarangay(selected)}
                        getOptionLabel={(types) => types}
                        getOptionKey={(types) => types}
                      />
                    </div>
                  </div>

                  <div className="flex gap-8 w-full justify-around">
                    <div className="mt-4 w-full">
                      <InputOrange
                        label="Nearest Landmark:"
                        {...register("landmark")}
                      />
                      {errors.landmark && (
                        <p className="text-red-500 text-[13px]">
                          {errors.landmark.message}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 w-full">
                      <InputOrange
                        label="House #, street, village:"
                        {...register("street")}
                      />
                      {errors.street && (
                        <p className="text-red-500 text-[13px]">
                          {errors.street.message}
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex w-full gap-8 ">
              <div className="flex flex-col gap-1 w-[50%]">
                <p className="text-[18px]">Select Service:</p>
                {tanstackData && (
                  <MultiSelect
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.value)}
                    options={tanstackData}
                    selectionLimit={5}
                    optionLabel="serviceName"
                    display="chip"
                    placeholder="Select a Service..."
                    maxSelectedLabels={3}
                    className="custom-checkbox w-full md:w-20rem "
                    itemTemplate={(option) => (
                      <div className="relative group flex flex-col justify-between h-full p-2 hover:bg-gray-100 rounded-md transition w-full max-w-[20rem]">
                        <div className="flex justify-between items-center">
                          <span>{option.serviceName}</span> -
                          <span className="ml-2 text-gray-500">
                            ₱{option.servicePrice}
                          </span>
                        </div>

                        <div className="max-h-0 overflow-hidden text-sm text-gray-600 mt-1 transition-all duration-300 group-hover:max-h-[100px] w-full">
                          <p className="break-words whitespace-normal">
                            {option.serviceDescription ||
                              "No description available."}
                          </p>
                        </div>
                      </div>
                    )}
                  />
                )}
              </div>

              <div className=" flex flex-col gap-1 w-[50%]">
                <p className="text-[18px] w-full"> Down Payment:</p>
                <div className="text-[20px] text-orangeRed justify-self-center">
                  {downPayment ? (
                    <p> ₱ {downPayment} </p>
                  ) : (
                    <p className="text-[18px]">Please Select A Service</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex w-full gap-8 *:w-full">
              <div className="flex flex-col gap-2">
                <p className="text-[18px]">Car Model:</p>
                <div className="relative">
                  <div className="text-black h-full">
                    <input
                      disabled={isModelShow ? false : true}
                      placeholder="Please Select A Model"
                      type="text"
                      value={selectedModel}
                      className={`bg-background rounded-md border text-white h-full focus:outline-none p-[8px] text-[16px] ${
                        isModelShow
                          ? "border-orangeRed "
                          : "border-orangeRed bg-[#EBEBE4]"
                      }`}
                      onChange={handleModelChange}
                    />
                  </div>

                  {showDropdown && selectedModel !== "" && (
                    <div className="text-black absolute bg-white top-14 p-3 overflow-y-auto h-fit max-h-[10rem] w-fit truncate shadow-md z-10 rounded-sm border-none text-justify flex flex-col">
                      {filteredModels.length === 0 ? (
                        <p>No Result</p>
                      ) : (
                        filteredModels.map((result, index) => (
                          <button
                            type="button"
                            key={index}
                            className="text-left"
                            onClick={() => handleModelSelect(result)}
                          >
                            {result}
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div>
                  <div className="w-[80%]">
                    <InputOrange
                      disabled={selectedModel ? true : false}
                      label="Other/Specific Model:"
                      {...register("model")}
                    />
                    {errors.model && (
                      <p className="text-red-500 text-[13px]">
                        {`${errors.model.message}`}
                      </p>
                    )}
                  </div>
                </div>
              </div>
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
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-2 w-full">
                <p className="text-[15px]">Proof of Payment/Payment Receipt:</p>
                <div className="h-[10rem] w-[10rem] border rounded-md border-orangeRed">
                  <ImageUpload
                    value={paymentProof}
                    onChange={(value) => setPaymentProof(value)}
                  />
                </div>
              </div>

              <div className="flex flex-col h-full w-full items-center p-3 gap-5">
                <p className="text-[18px]">Scan To Pay!</p>
                <div className="flex w-full h-full gap-8 justify-center items-center">
                  <Image
                    src={"/images/gcash-qr-test.png"}
                    height={100}
                    width={100}
                    className={`transition-transform duration-300 ease-in-out cursor-pointer ${
                      imageLarger1 ? "scale-200" : ""
                    }`}
                    onClick={handleImageClick1}
                    alt="GCash QR Code"
                  />

                  <Image
                    src={"/images/maya-qr-test.png"}
                    height={100}
                    width={100}
                    className={`transition-transform duration-300 ease-in-out cursor-pointer ${
                      imageLarger2 ? "scale-200" : ""
                    }`} // Tailwind classes for transition and scaling
                    onClick={handleImageClick2}
                    alt="Maya QR Code"
                  />
                </div>
                <p className="text-[12px]">Click to enlarge Image</p>
              </div>
            </div>
            {imageLarger1 && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                onClick={handleImageClick1} // Close the modal when clicked
              >
                <div className="relative">
                  <Image
                    src={"/images/gcash-qr-test.png"}
                    height={400}
                    width={400}
                    alt="Large QR Code"
                    className="rounded-md"
                  />
                </div>
              </div>
            )}

            {imageLarger2 && (
              <div
                className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                onClick={handleImageClick2} // Close the modal when clicked
              >
                <div className="relative">
                  <Image
                    src={"/images/maya-qr-test.png"}
                    height={400}
                    width={400}
                    alt="Large QR Code"
                    className="rounded-md"
                  />
                </div>
              </div>
            )}

            <Button
              title="Submit"
              type="submit"
              // disabled={paymentProof ? false : true}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
