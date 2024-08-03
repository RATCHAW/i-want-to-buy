import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { ConfigModule } from "@nestjs/config"
import { AuthModule } from "./auth/auth.module"
import { ProductModule } from "./product/product.module"
import { ImageKitWrapperModule } from "./helper/imagekit.module"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
      context: ({ req, res }) => ({ req, res }),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ImageKitWrapperModule,
    AuthModule,
    ProductModule,
  ],
  providers: [],
})
export class AppModule {}
