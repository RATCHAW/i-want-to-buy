import { Field } from "@nestjs/graphql"
import { ObjectType } from "@nestjs/graphql"
import { ID } from "@nestjs/graphql"
import { Int } from "@nestjs/graphql"
import { User } from "../user/user.model"

@ObjectType()
export class Product {
  @Field(() => ID, { nullable: false })
  id!: number

  @Field(() => String, { nullable: false })
  title!: string

  @Field(() => [String], { nullable: true })
  images!: Array<string>

  @Field(() => String, { nullable: false })
  description!: string

  @Field(() => String, { nullable: false })
  phoneNumber!: string

  @Field(() => Int, { nullable: false })
  price!: number

  @Field(() => Date, { nullable: false })
  createdAt!: Date

  @Field(() => Date, { nullable: false })
  updatedAt!: Date

  @Field(() => Int, { nullable: false })
  userId!: number

  @Field(() => User, { nullable: false })
  user?: User
}
