import { z } from "zod";

export const BookingSchema = z.object({
  firstName: z.string().min(1, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  email: z.string().min(1, "Email is Required").email("Must be a valid email"),
  number: z
    .string()
    .min(10, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  details: z.string().min(1, "Details is Required"),
  landmark: z.string().optional(),
  street: z.string().optional(),
  model: z.string().optional(),
});

export type BookingType = z.infer<typeof BookingSchema>;

export const InstallerSchema = z.object({
  installerId: z.number().optional(),
  installerFirstName: z.string().min(1, "First Name is Required"),
  installerLastName: z.string().min(1, "Last Name is Required"),
  installerEmail: z.string().optional(),
  installerPhoneNumber: z
    .string()
    .min(10, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  installerAddress: z.string().min(1, "Address is Required"),
  installerImage: z.string().optional(),
  installerExperience: z.string().min(1, "Experiences is Required"),
});

export type InstallerType = z.infer<typeof InstallerSchema>;
