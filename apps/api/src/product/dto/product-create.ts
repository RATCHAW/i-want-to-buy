import { ArgsType, Field, InputType, Int } from "@nestjs/graphql"
import { FileUpload, GraphQLUpload } from "graphql-upload-ts"

@InputType()
export class ProductCreateArgs {
  @Field(() => String, { nullable: false })
  title: string

  @Field(() => String, { nullable: false })
  description: string

  @Field(() => String, { nullable: false })
  phoneNumber: string

  @Field(() => Int, { nullable: false })
  price: number

  @Field(() => [GraphQLUpload], { nullable: false })
  images: Promise<FileUpload>[]
}
