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
import { MdEmail } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { succesToast } from "../toast";
import InstallerSchedule from "./InstallerSchedule";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingId: number;
  email?: string;
  date?: string;
  lName?: string;
  fName?: string;
  isReassigning?: boolean;
}
const AssignInstallerModal = (props: ModalProps) => {
  const {
    isOpen,
    onClose,
    bookingId,
    date,
    email,
    fName,
    lName,
    isReassigning,
  } = props;

  const {
    data,
    installerData,
    assignInstaller,
    getInstallerById,
    assignInstallerV2,
  } = useInstallers();

  const { acceptBooking, refetch } = useBooking();
  const { sendMail } = useMailer();
  const [selectedInstaller, setSelectedInstaller] = useState<number | null>(
    null
  );
  const [showSchedule, setShowSchedule] = useState(false);

  const [loading, setLoading] = useState(false);

  const showInstaller = async (id: number) => {
    try {
      setLoading(true); // Start loading

      const installerData = await getInstallerById(id); // Fetch installer data
      if (installerData) {
        setSelectedInstaller(installerData); // Update the selected installer state
      } else {
        console.error("Installer data not found");
      }
    } catch (error) {
      console.error("Error fetching installer data:", error);
    } finally {
      setLoading(false); // Stop loading in both success and error cases
    }
  };

  const handleAcceptBooking = (
    installerId: number,
    id: number,
    email: string
  ) => {
    Swal.fire({
      title: ` ${!isReassigning ? "Accept Booking?" : "Reassign Technician"}  `,
      text: ` ${
        !isReassigning
          ? "Are you sure you want to accept this booking?"
          : "Are you sure you want to reassign a technician?"
      }  `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Accept",
    }).then((res) => {
      if (res.isConfirmed) {
        acceptBooking(id);
        console.log(`${installerId} ${bookingId}`);
        assignInstaller(installerId!, bookingId);

        if (isReassigning) {
          succesToast("Technician Reassigned!");
          sendMail(
            "Technician has been reassigned",
            email,
            `Technician has been reassigned to your booking for the ${date}  
            <br/>
            <div 
            style= "
            font-size: 20px; 
            font-weight: bold; 
            font-family: Arial, sans-serif; 
            display: flex; 
            flex-direction: column;
            gap: 1rem;
            ">
              <p>
                ${installerData[0].installerFirstName} ${installerData[0].installerLastName}
              </p>

              <div>
                <p>
                  Experience:
                </p>
                <p>
                  ${installerData[0].installerExperience}
                </p>
              </div>

            </div>
            
              `,
            `${fName} ${lName}`
          );
        } else {
          succesToast("Booking Accepted!");
          sendMail(
            "Booking has been accepted",
            email,
            `Your Booking for the ${date} has been accepted <br/>
              ${installerData[0].installerFirstName}
            `,
            `${fName} ${lName}`
          );
        }
        refetch();
        onClose();
      }
    });
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalContainer width="65rem" height="45rem" z="99999">
        {selectedInstaller && (
          <InstallerSchedule
            id={installerData[0].installerId || 0}
            isOpen={showSchedule}
            onClose={() => setShowSchedule(false)}
          />
        )}
        <div className="absolute top-5 right-5 border-none rounded-full hover:bg-grey p-2">
          <IoMdClose
            className="text-white text-[30px] cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex w-full h-full p-10">
          <div className="flex flex-col gap-6 w-[50%]">
            <div className="w-full h-full">
              {loading ? (
                <div className="h-full w-full flex flex-col gap-2 justify-center items-center">
                  <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-orangePrimary" />
                  <p>Getting your technician please wait .......</p>
                </div>
              ) : installerData[0] ? (
                <div className="flex flex-col items-center gap-3">
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
                    className="rounded-full border border-orangeRed"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-semibold text-[25px]">
                      {installerData[0].installerFirstName}{" "}
                      {installerData[0].installerLastName}
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowSchedule(true)}
                      className="text-orangePrimary underline "
                    >
                      View Schedule
                    </button>
                  </div>
                  <div className="flex flex-col gap-3 items-left text-[15px] mx-auto w-full">
                    <div className="flex gap-3 items-center">
                      <FaPhoneAlt size={30} color="orangeRed" />
                      {installerData[0].installerPhoneNumber}
                    </div>
                    <div className="flex gap-3 items-center">
                      <FaHouseChimney size={30} color="orangeRed" />
                      {installerData[0].installerAddress}
                    </div>
                    <div className="flex gap-3 items-center">
                      <MdEmail size={30} color="orangeRed" />
                      {installerData[0].installerEmail}
                    </div>
                    <div>
                      <p className="text-center font-semibold text-[20px] text-orangeRed">
                        Experience
                      </p>
                      <p className="indent-5 text-[15px] text-justify">
                        {installerData[0].installerExperience}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex justify-center items-center">
                  Please Select an Installer.
                </div>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col gap-6 items-center p-10">
            <p className="text-[25px] font-semibold text-orangeRed">
              Technicians
            </p>
            <div className="flex flex-col gap-3 p-3 border border-orangePrimary rounded-lg w-full h-full overflow-y-auto">
              {data.length === 0 ? (
                <div className="text-white">
                  No Installer Available Please Add an Installer.
                </div>
              ) : (
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

            <button
              disabled={selectedInstaller ? false : true}
              className={`text-[20px] text-white px-4 py-2 rounded-md ${
                selectedInstaller ? "bg-orangeRed" : "bg-asphalt"
              }`}
              onClick={() =>
                handleAcceptBooking(
                  installerData[0].installerId!,
                  bookingId,
                  email!
                )
              }
            >
              Assign
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

export default AssignInstallerModal;
