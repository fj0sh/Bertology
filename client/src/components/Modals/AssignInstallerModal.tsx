import React from "react";
import ModalContainer from "./modalContainer/ModalContainer";
import { IoMdClose } from "react-icons/io";
import useInstallers from "@/hooks/requests/useInstallers";
import { InstallerType } from "@/lib/util/schema";
import Button from "../button/OrangeButton";
import Swal from "sweetalert2";
import useBooking from "@/hooks/requests/useBooking";
import useMailer from "@/hooks/mailer/useMailer";

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

  const { acceptBooking } = useBooking();
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
        assignInstaller(installerId, bookingId);
        sendMail(
          email,
          `Your Booking for the ${date} has been accepted`,
          `${fName} ${lName}`
        );
        onClose();
      }
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="70rem" height="50rem" z="99999">
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
                  <img
                    src={installerData[0]?.image}
                    alt="InstallerImage.jpg"
                    className="w-[45%] h-[45%]"
                  />
                  <p>
                    {installerData[0].firstName} {installerData[0].lastName}
                  </p>
                  <p>{installerData[0].phoneNumber}</p>
                  <p>{installerData[0].address}</p>
                  <Button
                    title="Assign"
                    onClick={() =>
                      handleAcceptBooking(
                        installerData[0].id!,
                        bookingId,
                        email!
                      )
                    }
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-[50%] flex p-10">
            <div className="flex flex-col gap-3 p-3 border border-orangePrimary rounded-lg w-full h-[90%] overflow-y-auto">
              {data?.map((res: InstallerType, index) => (
                <button
                  onClick={() => showInstaller(res.id)}
                  key={index}
                  className="border border-orangePrimary p-3 rounded-md"
                >
                  <p>
                    {res.firstName} {res.lastName}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AssignInstallerModal;
