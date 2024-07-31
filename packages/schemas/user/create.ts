import { z } from "zod"

export const createUserSchema = z
  .object({
    firstName: z.string().trim().min(4, "First name is required"),
    lastName: z.string().trim().min(4, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .describe("CreateUserInput: CreateUserInput")

export const loginUserSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
  })
  .describe("LoginUserInput: LoginUserInput")
