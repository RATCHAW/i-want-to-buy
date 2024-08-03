import { ArgsType, Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class FindManyProductArgs {
  @Field(() => Int, { nullable: true })
  userId?: number

  @Field(() => Int, { nullable: true })
  page?: number
}
