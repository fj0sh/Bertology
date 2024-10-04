import { z } from "zod";

export const BookingSchema = z.object({
  location: z.string().min(1, "Location is Required"),
  date: z.string().optional(),
  account: z.string().optional(),
  number: z
    .string()
    .min(10, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  service: z.string().min(1, "Needed Service is Required"),
  model: z.string().min(1, "Car Model is Required"),
  details: z.string().min(1, "Details is Required"),
});

export type BookingType = z.infer<typeof BookingSchema>;
