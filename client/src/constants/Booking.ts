import { ServiceType } from "./Service";
import { UserType } from "./Users";

interface Installer {
  firstName: string;
  lastName: string;
}

interface BookingType {
  id: number;
  location: string;
  firstName: string;
  lastName: string;
  email: string;
  facebookAccount: string;
  contactNumber: string;
  serviceRequest: string;
  carModel: string;
  additionalDetails: string;
  bookedDate: string;
  municipality: string;
  barangay: string;
  landmark: string;
  proofOfPayment: string;
  mode: string;
  street: string;
  user: UserType;
  service: ServiceType;
  status: string;
  installer?: Installer;
}

interface BookingResponse {
  data?: BookingType;
}

export type { BookingResponse, BookingType };
