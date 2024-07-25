import { Resolver, Mutation, Query } from "@nestjs/graphql"
import { AuthService } from "./auth.service"
import { User } from "../@generated/user/user.model"
import { ZodArgs } from "nestjs-graphql-zod"
import { createUserSchema } from "@iwtb/schemas"

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  helloWorld() {
    return "hello"
  }

  @Mutation(() => User)
  async signup(@ZodArgs(createUserSchema) createUserInput: ZodArgs.Of<typeof createUserSchema>) {
    return await this.authService.signup(createUserInput)
  }
}
