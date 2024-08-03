import { Resolver, Query, Mutation, Args, Int, Context } from "@nestjs/graphql"
import { ProductService } from "./product.service"
import { Product } from "src/@generated/product/product.model"
import { Context as IContext } from "src/types/global"
import { UseGuards } from "@nestjs/common"
import { AuthGuard } from "src/auth/auth.guard"
import { FindManyProductArgs } from "./dto/product-find-many.dto"
import { ProductCreateArgs } from "./dto/product-create"
import { createProductSchema } from "@iwtb/schemas"
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe"

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product, { name: "createProduct" })
  @UseGuards(AuthGuard)
  async createProduct(
    @Args("createProductInput", new ZodValidationPipe(createProductSchema))
    createProductInput: ProductCreateArgs,
    @Context() context: IContext,
  ) {
    return await this.productService.create(createProductInput, context)
  }

  @Query(() => Product, { name: "product" })
  async findProduct(@Args("id", { type: () => Int }) id: number) {
    return await this.productService.findById(id)
  }

  @Query(() => [Product], { name: "products" })
  async findProducts(@Args("findManyProductArgs") { userId, page }: FindManyProductArgs) {
    return await this.productService.findMany(userId, page)
  }
}
