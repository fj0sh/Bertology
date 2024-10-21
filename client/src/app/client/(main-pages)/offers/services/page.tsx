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
import { useUser } from "@/providers/UserProvider";
import useBooking from "@/hooks/requests/useBooking";
import Swal from "sweetalert2";
import ImageUpload from "@/components/input/ImageUpload";
import Dropdown from "@/components/input/DropDown";
import useServices from "@/hooks/requests/useServices";
import { ServiceType } from "@/constants/Service";
import Locations from "@/constants/Cebuprovinces";
import Image from "next/image";
import axios from "axios";

import carModels from "@/constants/CarModel";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState<BookingType | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentProof, setPaymentProof] = useState("");
  const [serviceType, setServiceType] = useState(0);
  const [downPayment, setDownPayment] = useState<any | undefined>(undefined);
  const [municipality, setMunicipality] = useState();
  const [barangay, setBarangay] = useState([]);
  const [imageLarger1, setIsImageLarger1] = useState(false);
  const [imageLarger2, setIsImageLarger2] = useState(false);
  const [serviceMode, setServiceMode] = useState("homeService");
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingType>({ resolver: zodResolver(BookingSchema) });

  const { data, bookService, getServiceById } = useBooking();
  const { services } = useServices();

  useEffect(() => {
    const allModels: string[] = [];
    carModels.map((model) => {
      let brands = model.brand;
      let models = model.models;

      models.map((res: string) => allModels.push(`${brands} ${res}`));
    });

    setModels(allModels);
  }, []);

  const filteredModels = models.filter((model) =>
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

  // Log the barangay list to verify

  const noDateSelected = () => {
    Swal.fire({
      title: "Error",
      text: "Please select a date for booking",
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

  const onSubmit = async (data: BookingType) => {
    try {
      const res = await axios.post("/api/mailer", { recepient: data.email });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    setShowConfirmation(true);

    // if (!selectedDate) {
    //   noDateSelected();
    // } else {
    //   console.log(
    //     data.firstName,
    //     data.lastName,
    //     data.email,
    //     parseInt(data.number),
    //     municipality!,
    //     barangay.toString(),
    //     data.landmark,
    //     serviceType,
    //     selectedModel,
    //     data.details,
    //     paymentProof,
    //     selectedDate
    //   );
    //   bookService(
    //     data.firstName,
    //     data.lastName,
    //     data.email,
    //     parseInt(data.number),
    //     municipality!,
    //     barangay.toString(),
    //     data.landmark!,
    //     serviceType,
    //     selectedModel,
    //     data.details,
    //     paymentProof,
    //     formatDateForSQL(selectedDate)
    //   );
    //   successfulBooking();
    //   reset();
    // }
  };

  const handleDate = (date: any) => {
    setSelectedDate(date);
  };

  const handleImageClick1 = () => {
    setIsImageLarger1(!imageLarger1);
  };
  const handleImageClick2 = () => {
    setIsImageLarger2(!imageLarger2);
  };

  useEffect(() => {
    getServiceById(serviceType);
  }, [serviceType]);

  useEffect(() => {
    if (data && data.length > 0) {
      const deductedPrice = data[0].servicePrice * 0.3;
      setDownPayment(deductedPrice);
    } else {
      console.log("Data is empty or undefined");
    }
  }, [data]);

  return (
    <>
      <div className="transition-all duration-1000 ease-in-out">
        <BookingConfirmation
          onClose={() => setShowConfirmation(false)}
          isOpen={showConfirmation}
        />
      </div>
      <div className="w-full h-full flex justify-center p-10 gap-x-[10rem]">
        <div className="w-full h-full items-end flex flex-col gap-8">
          <div className="flex w-[80%] px-10">
            <PrimeCalendar selectedDate={handleDate} />
          </div>
          <div className="text-white self-center flex items-center gap-2">
            <p className="font-bold text-[18px]">Selected Date:</p>
            {selectedDate
              ? formatDateNormal(selectedDate)
              : "Please Select a Date"}
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

                  <div className="mt-4">
                    <InputOrange
                      label="Nearest Landmark or Pin Location:"
                      {...register("landmark")}
                    />
                    {errors.landmark && (
                      <p className="text-red-500 text-[13px]">
                        {errors.landmark.message}
                      </p>
                    )}
                  </div>
                </>
              ) : (
                <div></div>
              )}
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <p className="text-[18px] ">Select Service:</p>
                {services && (
                  <Dropdown<ServiceType>
                    options={services}
                    title="Services"
                    onSelect={(selected) => setServiceType(selected.id)}
                    getOptionLabel={(types) => types.serviceName}
                    getOptionKey={(types) => types.id}
                  />
                )}
              </div>
              <div className=" flex flex-col gap-1">
                <p className="text-[18px]"> Down Payment:</p>
                <div className="text-[20px] text-orangeRed justify-self-center">
                  {downPayment ? (
                    <p> ₱ {downPayment} </p>
                  ) : (
                    <p className="text-[18px]">Please Select A Service</p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <p className="text-[18px]"> Car Model:</p>
              <div className="relative">
                <div className="text-black h-full">
                  <input
                    type="text"
                    value={selectedModel}
                    className="bg-background rounded-md border text-white border-orangeRed h-full focus:outline-none p-[8px] text-[16px]"
                    onChange={(e) => setSelectedModel(e.target.value)}
                  />
                </div>
                <div
                  className={`text-black absolute bg-white top-14 p-3 overflow-y-auto w-[12rem] truncate shadow-md z-10 rounded-sm border-none text-justify flex flex-col ${
                    selectedModel === "" ? "hidden" : ""
                  }`}
                >
                  {filteredModels.length === 0 ? (
                    <p>No Result</p>
                  ) : (
                    filteredModels.map((result, index) => (
                      <button
                        type="button"
                        key={index}
                        className="text-left"
                        onClick={() => setSelectedModel(result)}
                      >
                        {result}
                      </button>
                    ))
                  )}
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
                  {/* Image that enlarges on click */}
                  <Image
                    src={"/images/gcash-qr-test.png"}
                    height={100}
                    width={100}
                    className={`transition-transform duration-300 ease-in-out cursor-pointer ${
                      imageLarger1 ? "scale-200" : ""
                    }`} // Tailwind classes for transition and scaling
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
