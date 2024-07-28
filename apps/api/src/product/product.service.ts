import { createProductSchema } from "@iwtb/schemas"
import { Injectable } from "@nestjs/common"
import { ZodArgs } from "nestjs-graphql-zod"
import prisma from "../config/prisma"
import { Context } from "src/types/global"

@Injectable()
export class ProductService {
  async create(createProductInput: ZodArgs.Of<typeof createProductSchema>, context: Context) {
    const { user_id } = context.req["user"]
    const product = await prisma.product.create({
      data: { ...createProductInput, userId: user_id },
    })

    return product
  }
}
