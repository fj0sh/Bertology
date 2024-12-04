import { BookingResponse } from "@/constants/Booking";
import instance from "@/lib/util/axios-instance";
import { useUser } from "@/providers/UserProvider";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useBooking = () => {
  const [data, setData] = useState<any | undefined>(undefined);
  const [serviceType, setServiceType] = useState([]);
  const [allBookings, setAllBookings] = useState<BookingResponse[] | undefined>(
    undefined
  );
  const [dataByStatus, setDataByStatus] = useState();
  const [dataByDate, setDataByDate] = useState([]);
  const [chartData, setChartData] = useState([]);

  const { user } = useUser();

  const getAllBookings = async () => {
    try {
      const res = await instance.get(`/booking/bookings`);
      setAllBookings(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: tanstackData, refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
  });

  const bookService = async (
    firstName: string,
    lastName: string,
    email: string,
    contactNumber: number,
    municipality: string,
    barangay: string,
    landmark: string,
    carModel: string,
    additionalDetails: string,
    proofOfPayment: string,
    bookedDate: string,
    mode: string,
    street?: string
  ) => {
    const body = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: contactNumber,
      municipality: municipality,
      barangay: barangay,
      landmark: landmark,
      carModel: carModel,
      additionalDetails: additionalDetails,
      proofOfPayment: proofOfPayment,
      bookedDate: bookedDate,
      mode: mode,
      street: street,
    };

    try {
      const res = await instance.post(`/booking/`, body);
      refetch();
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getServiceById = async (id: number) => {
    try {
      const res = await instance.get(`/services/${id}`);
      setData(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const selectTypes = async (bookingId: number, serviceId: number) => {
    try {
      const res = await instance.post("booking/selectTypes", {
        bookingId: bookingId,
        serviceId: serviceId,
      });

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const acceptBooking = async (id: number) => {
    try {
      const res = instance.patch(`/booking/accept/${id}`);
      refetch();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const declineBooking = async (id: number) => {
    try {
      const res = instance.patch(`/booking/decline/${id}`);
      refetch();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const getBookingByStatus = async (status: string) => {
    try {
      const res = await instance.post(`/booking/status`, {
        status: status,
      });
      console.log(res.data);
      setDataByStatus(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedTypes = async (id: number) => {
    try {
      const res = await instance.get(`/booking/bookings/${id}`);
      setServiceType(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBooking = async (id: number) => {
    try {
      const res = await instance.delete(`/booking/${id}`);
      refetch();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const setBookingAsDone = async (id: number) => {
    try {
      await instance.patch(`/booking/done/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const getBookingByDate = async (date: string) => {
    try {
      const res = await instance.post("/booking/date", { date });
      setDataByDate(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const declineBookingReason = async (bookingId: number, reason: string) => {
    try {
      await instance.post("/booking/declineReason", {
        bookingId,
        reason,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const reassignInstaller = async (bookingId: number, installerId: number) => {
    try {
      await instance.patch("/booking/reassign", {
        bookingId,
        installerId,
      });
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const res = await instance.get("/booking/status");
        const counts = res.data.map((status: any) => status.count);
        setChartData(counts);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookingData();
  }, []);

  return {
    bookService,
    getServiceById,
    getAllBookings,
    acceptBooking,
    declineBooking,
    selectTypes,
    getSelectedTypes,
    deleteBooking,
    getBookingByStatus,
    getBookingByDate,
    setBookingAsDone,
    declineBookingReason,
    reassignInstaller,
    refetch,
    data,
    dataByStatus,
    dataByDate,
    allBookings,
    serviceType,
    chartData,
    tanstackData,
  };
};

export default useBooking;
