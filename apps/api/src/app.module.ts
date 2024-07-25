import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule, ConfigService } from "@nestjs/config"
import env from "./utils/env"
import { join } from "path"
import { UserModule } from "./user/user.module"
import { UserResolver } from "./user/user.resolver"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "schema.gql",
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: "postgres",
        url: configService.get<string>("DATABASE_URL"),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ load: [env], isGlobal: true }),
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
