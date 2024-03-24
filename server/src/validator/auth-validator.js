import { z } from "zod";

const signupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(4, { message: "Username must be more than 4 characters" }),
  fullName: z
    .string({ required_error: "Full Name is required" })
    .trim()
    .min(4, { message: "Full Name must be more than 4 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(4, { message: "Email must be more than 4 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be more than 7 characters" }),
});

const loginSchema = z.object({
  usernameOrEmail: z
    .string({ required_error: "Username or Email is required" })
    .trim(),
  password: z.string({ required_error: "Password is required" }).trim(),
});

export { signupSchema, loginSchema };
