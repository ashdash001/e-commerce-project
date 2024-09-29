"use client"
import { z } from "zod";

export const emailValidation = z
  .string()
  .email({ message: "Please enter your valid email" });

export const passwordValidation = z
  .string()
  .min(4, { message: "Password must be at least 4 characters long" })
  .max(20, { message: "Password must not exceed 20 characters" });

export const usernameValidation = z
  .string()
  .min(3, { message: "username must be at least 3 characters long" })
  .max(20, { message: "username must not exceed 20 characters" });

export const signUpSchema = z.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});
