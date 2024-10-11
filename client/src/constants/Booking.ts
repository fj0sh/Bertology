import { ServiceType } from "./Service";
import { UserType } from "./Users";

interface BookingType {
  id: number;
  location: string;
  fbAccount: string;
  contact: string;
  serviceRequest: string;
  carModel: string;
  detail: string;
  dateBooked: string;
  paymentType: string;
  paymentProof: string;
  user: UserType;
  service: ServiceType;
}

interface BookingResponse {
  data?: BookingType;
}

export type { BookingResponse, BookingType };
