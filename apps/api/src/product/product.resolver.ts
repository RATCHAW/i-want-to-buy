import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql"
import { ProductService } from "./product.service"
import { Product } from "src/@generated/product/product.model"
import { ZodArgs } from "nestjs-graphql-zod"
import { createProductSchema } from "@iwtb/schemas"
import { Context as IContext } from "src/types/global"
import { UseGuards } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  @UseGuards(AuthGuard)
  async createProduct(
    @ZodArgs(createProductSchema) createProductInput: ZodArgs.Of<typeof createProductSchema>,
    @Context() context: IContext,
  ) {
    return await this.productService.create(createProductInput, context)
  }

  @Query(() => Product, { name: "product" })
  async findProduct(@Args("id", { type: () => Int }) id: number) {
    return await this.productService.findById(id)
  }

  @Query(() => [Product], { name: "products" })
  async findProducts(@Args("userId", { type: () => Int, nullable: true }) userId?: number) {
    return await this.productService.findMany(userId)
  }
}
