import { Injectable, UnauthorizedException } from "@nestjs/common"
import { UserService } from "../user/user.service"
import { createUserSchema, loginUserSchema } from "@iwtb/schemas"
import { ZodArgs } from "nestjs-graphql-zod"
import * as argon2 from "argon2"
import { sign } from "jsonwebtoken"
import { ConfigService } from "@nestjs/config"
import { Context } from "src/types/global"
import { UserInputError } from "@nestjs/apollo"

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async signup(createUserInput: ZodArgs.Of<typeof createUserSchema>, context: Context) {
    const { password } = createUserInput
    const hashedPassword = await argon2.hash(password)
    const user = await this.userService.create({ ...createUserInput, password: hashedPassword })

    if (user) {
      const token = sign({ user_id: user.id }, this.configService.get<string>("JWT_ACCESSTOKEN_SECRET"))
      context.res.cookie("access_token", token, {
        secure: true,
        httpOnly: true,
        sameSite: "none",
        maxAge: 999999999999999,
      })
      return token
    }
  }

  async login(loginUserInput: ZodArgs.Of<typeof loginUserSchema>, context: Context) {
    try {
      const user = await this.userService.findByEmail(loginUserInput.email)

      if (user && (await argon2.verify(user.password, loginUserInput.password))) {
        const token = sign({ user_id: user.id }, this.configService.get<string>("JWT_ACCESSTOKEN_SECRET"))
        context.res.cookie("access_token", token, {
          secure: true,
          httpOnly: true,
          sameSite: "none",
          maxAge: 999999999999999,
        })

        return token
      } else {
        throw new UnauthorizedException()
      }
    } catch (error) {
      throw new UserInputError("Invalid Email or Password")
    }
  }
}
