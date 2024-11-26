import React, { useEffect, useState } from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import useInstallers from "@/hooks/requests/useInstallers";
import { InstallerType } from "@/lib/util/schema";
import Button from "../button/OrangeButton";
import Swal from "sweetalert2";
import useBooking from "@/hooks/requests/useBooking";
import useMailer from "@/hooks/mailer/useMailer";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: number;
  email?: string;
  date?: string;
  lName?: string;
  fName?: string;
}
const AssignInstallerModal = (props: ModalProps) => {
  const { isOpen, onClose, bookingId, date, email, fName, lName } = props;

  const { data, installerData, assignInstaller, getInstallerById } =
    useInstallers();

  const { acceptBooking, refetch } = useBooking();
  const { sendMail } = useMailer();

  const showInstaller = (id: number) => {
    getInstallerById(id);
  };

  const handleAcceptBooking = (
    installerId: number,
    id: number,
    email: string
  ) => {
    Swal.fire({
      title: "Accept Booking?",
      text: "You are about to accept this booking.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          title: "Booking Accepted",
          icon: "success",
        });
        acceptBooking(id);
        console.log(`${installerId} ${bookingId}`);
        assignInstaller(installerId, bookingId);
        sendMail(
          email,
          `Your Booking for the ${date} has been accepted`,
          `${fName} ${lName}`
        );
        refetch();
        onClose();
      }
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="65rem" height="45rem" z="99999">
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex w-full h-full p-10">
          <div className="flex flex-col gap-6 w-[50%]">
            <div>
              <p className="text-[20px] text-orangePrimary font-semibold">
                PLEASE ASSIGN AN INSTALLER
              </p>
            </div>
            <div>
              {installerData[0] && (
                <div className="flex flex-col items-center">
                  <Image
                    src={
                      installerData[0]?.installerImage
                        ? `${installerData[0]?.installerImage}`
                        : "/images/empty-profile.jpg"
                    }
                    alt="InstallerImage.jpg"
                    quality={100}
                    sizes="100%"
                    width={0}
                    height={0}
                    style={{ width: "45%", height: "45%" }}
                    className="border-none rounded-sm"
                  />
                  <p>
                    {installerData[0].installerFirstName}{" "}
                    {installerData[0].installerLastName}
                  </p>
                  <p>{installerData[0].installerPhoneNumber}</p>
                  <p>{installerData[0].installerAddress}</p>
                  <p>{installerData[0].installerExperience}</p>
                  <Button
                    title="Assign"
                    onClick={() =>
                      handleAcceptBooking(
                        installerData[0].installerId!,
                        bookingId,
                        email!
                      )
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-6 items-center p-10">
            <p className="text-[25px] font-semibold text-orangeRed">
              Installers
            </p>
            <div className="flex flex-col gap-3 p-3 border border-orangePrimary rounded-lg w-full h-fit overflow-y-auto">
              {data.length === 0 ? (
                <div className="text-white">
                  No Installer Available Please Add an Installer.
                </div>
              ) : (
                // Filter active installers
                data
                  ?.filter(
                    (res: InstallerType) => res.installerStatus === "ACTIVE"
                  )
                  .map((res: InstallerType) => (
                    <button     
                      onClick={() =>
                        showInstaller(res.installerId ? res.installerId : 0)
                      }
                      key={res.installerId}
                      className="border border-orangePrimary p-3 rounded-md"
                    >
                      <p>
                        {res.installerFirstName} {res.installerLastName}
                      </p>
                    </button>
                  ))
              )}
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AssignInstallerModal;
