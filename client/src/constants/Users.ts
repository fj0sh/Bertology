import { z } from "zod";

enum status {
  "ACTIVE",
  "INACTIVE",
}
export const userSchema = z.object({
  id: z.number().optional(),
  firstname: z.string(),
  lastname: z.string(),
  emailAddress: z.string().email(),
  username: z.string(),
  password: z.string().min(8),
  phoneNumber: z.string().max(11, "Invalid Phone Number"),
  confirmPassword: z.string().min(8),
  // status: z.enum(status),
});

export type UserType = z.infer<typeof userSchema>;
