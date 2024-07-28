import { Injectable } from "@nestjs/common"
import { ZodArgs } from "nestjs-graphql-zod"
import { createUserSchema } from "@iwtb/schemas"
import prisma from "src/config/prisma"
import { Prisma } from "@prisma/client"
import { UserInputError } from "@nestjs/apollo"

@Injectable()
export class UserService {
  async create(createUserInput: ZodArgs.Of<typeof createUserSchema>) {
    try {
      const user = await prisma.user.create({
        data: {
          ...createUserInput,
        },
      })
      if (user) return user
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
        throw new UserInputError("Email already in use")
      }
    }
  }

  async findByEmail(email: string) {
    try {
      return await prisma.user.findUnique({
        where: {
          email,
        },
      })
    } catch (error) {
      throw new UserInputError("User not found")
    }
  }
}
