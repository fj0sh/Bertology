import React, { useEffect, useState } from 'react'
import { Calendar } from "primereact/calendar";
import axios from 'axios';

const PrimeCalendar = () => {
    const [bookedDates, setBookedDates] = useState<Date[]>([])

    useEffect(() => {
        const fetchBookedDates = async () => {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/services/booked-dates`)

                const disableDates = res.data.map((booked: any) => {
                    return new Date(booked.dateBooked.split('T')[0])
                })

                setBookedDates(disableDates)
            } catch (error) {
                console.log(error)
            }
        }

        fetchBookedDates()
    }, []);

    return (
        <Calendar className='w-full h-full' inline disabledDates={bookedDates} />
    )
}

export default PrimeCalendar
