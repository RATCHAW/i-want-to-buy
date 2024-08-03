import { z } from "zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

export const createProductSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    phoneNumber: z.string(),
    price: z.number().min(10),
    //TODO: Add image validation
    images: z.any(),
  })
  .describe("CreateProductInput: CreateProductInput")
