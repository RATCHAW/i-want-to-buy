import { Resolver, Mutation, Query } from "@nestjs/graphql"
import { UserService } from "./user.service"
import { User } from "../@generated/user/user.model"
import { ZodArgs } from "nestjs-graphql-zod"
import { createUserSchema } from "@iwtb/schemas"

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => String)
  helloWorld() {
    return "Hello World"
  }

  @Mutation(() => User)
  createUser(@ZodArgs(createUserSchema) createUserInput: ZodArgs.Of<typeof createUserSchema>) {
    return this.userService.create(createUserInput)
  }
}
