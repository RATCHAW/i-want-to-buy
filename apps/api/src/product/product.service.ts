import { createProductSchema } from "@iwtb/schemas"
import { Injectable } from "@nestjs/common"
import { ZodArgs } from "nestjs-graphql-zod"
import prisma from "../config/prisma"
import { Context } from "src/types/global"
import { Prisma } from "@prisma/client"
import { UserInputError } from "@nestjs/apollo"

@Injectable()
export class ProductService {
  async create(createProductInput: ZodArgs.Of<typeof createProductSchema>, context: Context) {
    const { user_id } = context.req["user"]
    const product = await prisma.product.create({
      data: { ...createProductInput, userId: user_id },
    })

    return product
  }

  async findById(id: number) {
    try {
      return await prisma.product.findUnique({ where: { id }, include: { user: true } })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
        throw new UserInputError("Product not found")
      }
    }
  }

  async findMany(userId?: number) {
    return await prisma.product.findMany({ where: { userId: userId || undefined }, include: { user: true } })
  }
}
