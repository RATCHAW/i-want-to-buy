import { Injectable } from "@nestjs/common"
import { ZodArgs } from "nestjs-graphql-zod"
import { createUserSchema } from "@iwtb/schemas"
import prisma from "src/config/prisma"

@Injectable()
export class UserService {
  create(createUserInput: ZodArgs.Of<typeof createUserSchema>) {
    prisma.user.create({
      data: {
        ...createUserInput,
      },
    })
  }
}
