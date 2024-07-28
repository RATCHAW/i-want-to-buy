import { z } from "zod"

export const createUserSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })
  .describe("createUserInput: createUserInput")

export const loginUserSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string(),
  })
  .describe("loginUserInput: loginUserInput")
