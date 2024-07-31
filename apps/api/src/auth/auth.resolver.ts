import { Resolver, Mutation, Query, Context } from "@nestjs/graphql"
import { AuthService } from "./auth.service"
import { User } from "../@generated/user/user.model"
import { ZodArgs } from "nestjs-graphql-zod"
import { loginUserSchema, createUserSchema } from "@iwtb/schemas"
import { Context as IContext } from "src/types/global"

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  helloWorld() {
    return "hello"
  }

  @Mutation(() => String)
  async signup(
    @ZodArgs(createUserSchema, { name: "signupUserInput" }) createUserInput: ZodArgs.Of<typeof createUserSchema>,
    @Context() context: IContext,
  ) {
    return await this.authService.signup(createUserInput, context)
  }

  @Mutation(() => User)
  async login(
    @ZodArgs(loginUserSchema, { name: "loginUserInput" }) loginUserInput: ZodArgs.Of<typeof loginUserSchema>,
    @Context() context: IContext,
  ) {
    return await this.authService.login(loginUserInput, context)
  }
}
