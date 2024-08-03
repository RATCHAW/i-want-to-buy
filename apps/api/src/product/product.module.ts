import { Module } from "@nestjs/common"
import { ProductService } from "./product.service"
import { ProductResolver } from "./product.resolver"

@Module({
  imports: [],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}
