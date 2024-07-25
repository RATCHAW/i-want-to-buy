import { Injectable } from "@nestjs/common"
import { ZodArgs } from "nestjs-graphql-zod"
import { createUserSchema } from "@iwtb/schemas"
import prisma from "src/config/prisma"
import * as argon2 from "argon2"

@Injectable()
export class UserService {
  async create(createUserInput: ZodArgs.Of<typeof createUserSchema>) {
    const user = await prisma.user.create({
      data: {
        ...createUserInput,
      },
    })
    return user
  }
}
