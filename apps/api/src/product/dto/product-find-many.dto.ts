import { ArgsType, Field, InputType } from "@nestjs/graphql"

@InputType()
export class FindManyProductArgs {
  @Field(() => Number, { nullable: true })
  userId?: number

  @Field(() => Number, { nullable: true })
  page?: number
}
