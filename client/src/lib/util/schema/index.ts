import { z } from "zod";

export const BookingSchema = z.object({
  location: z.string(),
  date: z.string().optional(),
  account: z.string(),
  number: z
    .string()
    .min(10, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  service: z.string(),
  model: z.string(),
  details: z.string(),
});

export type BookingType = z.infer<typeof BookingSchema>;
