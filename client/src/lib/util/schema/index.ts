import { z } from "zod";

export const BookingSchema = z.object({
  firstName: z.string().min(1, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  email: z.string().min(1, "Email is Required").email("Must be a valid email"),
  number: z
    .string()
    .min(10, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  details: z.string().optional(),
  landmark: z.string().optional(),
  street: z.string().optional(),
  model: z.string().min(1, "Model is Required"),
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
  installerStatus: z.string().optional(),
});

export type InstallerType = z.infer<typeof InstallerSchema>;

export const InquirySchema = z.object({
  id: z.number().optional(),
  firstName: z.string().min(1, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  email: z
    .string()
    .min(1, "Email is Required")
    .email("Please enter a valid email address"),
  message: z.string().min(1, "Message is Required"),
  status: z.string().optional(),
});

export type InquiryType = z.infer<typeof InquirySchema>;

export const ServiceSchema = z.object({
  id: z.number().optional(),
  serviceName: z.string().min(1, "Service Name in Required"),
  servicePrice: z.string().min(1, "Price in Required"),
  // serviceImage: z.number().min(1, "Image in Required"),
  serviceDescription: z.string().min(1, "Description in Required"),
});

export type ServiceType = z.infer<typeof ServiceSchema>;
