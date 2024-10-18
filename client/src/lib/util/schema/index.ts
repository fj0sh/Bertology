import { z } from "zod";

export const BookingSchema = z.object({
  firstName: z.string().min(1, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  email: z.string().min(1, "Email is Required").email("Must be a valid email"),
  number: z
    .string()
    .min(10, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  account: z.string().optional(),
  model: z.string().min(1, "Car Model is Required"),
  details: z.string().min(1, "Details is Required"),
  landmark: z.string().min(1, "Landmark is Required"),
});

export type BookingType = z.infer<typeof BookingSchema>;
