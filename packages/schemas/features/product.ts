import { z } from "zod"

export const createProductSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    phoneNumber: z.string(),
    images: z.array(z.string().url()),
    price: z.number(),
  })
  .describe("createProductInput: createProductInput")
