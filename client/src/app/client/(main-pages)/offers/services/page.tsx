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
import useSendMail from "@/hooks/requests/useSendMail";
import carModels from "@/constants/CarModel";

const Booking = ({ params }: { params: { id: string } }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [formData, setFormData] = useState<BookingType | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentProof, setPaymentProof] = useState("");
  const [serviceType, setServiceType] = useState(0);
  const [municipality, setMunicipality] = useState();
  const [barangay, setBarangay] = useState([]);
  const [imageLarger1, setIsImageLarger1] = useState(false);
  const [imageLarger2, setIsImageLarger2] = useState(false);
  const [concatModel, setConcatModel] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingType>({ resolver: zodResolver(BookingSchema) });

  const { user } = useUser();
  const { bookService, getServiceById } = useBooking();
  const { services } = useServices();
  const { sendMail } = useSendMail();

  carModels.map((models) => {
    const carModelResult = models;

    console.log(carModelResult);

    let model;
    let brand;
  });

  useEffect(() => {
    console.log(serviceType);
  }, [serviceType]);

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
  useEffect(() => {
    console.log(barangay);
  }, [barangay]);

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
      text: "Your booking has been made successfully",
      icon: "success",
    });
    setShowConfirmation(false);
    reset();
  };

  const onSubmit = async (data: BookingType) => {
    if (!selectedDate) {
      noDateSelected();
    } else {
      console.log(
        data.firstName,
        data.lastName,
        data.email,
        parseInt(data.number),
        data.account!,
        municipality!,
        barangay.toString(),
        data.landmark,
        serviceType,
        data.model,
        data.details,
        paymentProof,
        selectedDate
      );
      bookService(
        data.firstName,
        data.lastName,
        data.email,
        parseInt(data.number),
        data.account!,
        municipality!,
        barangay.toString(),
        data.landmark,
        serviceType,
        data.model,
        data.details,
        paymentProof,
        formatDateForSQL(selectedDate)
      );
      sendMail("francisjoshuacutamora@gmail.com");
      successfulBooking();
      reset();
    }
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
    getServiceById(parseInt(params.id));
  }, [params.id]);

  return (
    <>
      {/* <BookingConfirmation
        test={formData?.location}
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      /> */}
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

            <div>
              <InputOrange
                label="Facebook Account(Optional):"
                {...register("account")}
              />
              {errors.email && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.account?.message}`}
                </p>
              )}
            </div>

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
                  disabled={municipality ? false : true}
                  options={barangay}
                  title="Barangay"
                  onSelect={(selected) => setBarangay(selected)}
                  getOptionLabel={(types) => types}
                  getOptionKey={(types) => types}
                />
              </div>
            </div>

            <div>
              <InputOrange
                label="Nearest Landmark or Pin Location:"
                {...register("landmark")}
              />
              {errors.model && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.model.message}`}
                </p>
              )}
            </div>

            <div className="">
              <p className="text-[18px]">Select Service:</p>
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

            <div>
              <InputOrange label="Car Model:" {...register("model")} />
              {errors.model && (
                <p className="text-red-500 text-[13px]">
                  {`${errors.model.message}`}
                </p>
              )}
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
                    src={"/images/maya-qr-test. png"}
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
              disabled={paymentProof ? false : true}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
