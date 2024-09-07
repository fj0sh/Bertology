import { z } from "zod";

enum Status {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export const userSchema = z.object({
  id: z.number().optional(),
  firstname: z.string().min(1, "Firstname is required"),
  lastname: z.string().min(1, "Lastname is required"),
  emailAddress: z.string().email("Invalid email address"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  phoneNumber: z
    .string()
    .regex(/^\d+$/, "Phone number must contain only digits")
    .length(10, "Phone number must be exactly 10 digits"),
  confirmPassword: z
    .string()
    .min(8, "Confirm password must be at least 8 characters long"),
  status: z.nativeEnum(Status),
});

export type UserType = z.infer<typeof userSchema>;
