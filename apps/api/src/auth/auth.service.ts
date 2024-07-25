import { Injectable } from "@nestjs/common"
import { UserService } from "../user/user.service"
import { createUserSchema } from "@iwtb/schemas"
import { ZodArgs } from "nestjs-graphql-zod"
import * as argon2 from "argon2"
import jwt from "jsonwebtoken"
import { ConfigService } from "@nestjs/config"
import { Context } from "@nestjs/graphql"

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async signup(createUserInput: ZodArgs.Of<typeof createUserSchema>) {
    const { password } = createUserInput
    const hashedPassword = await argon2.hash(password)
    const user = await this.userService.create({ ...createUserInput, password: hashedPassword })
    if (user) {
      jwt.sign({ user_id: user.id }, this.configService.get<string>("JWT_ACCESSTOKEN_SECRET"))
    }

    return user
  }
}
