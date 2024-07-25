import { Module } from "@nestjs/common"
import { GraphQLModule } from "@nestjs/graphql"
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo"
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule, ConfigService } from "@nestjs/config"
import env from "./utils/env"
import { AuthModule } from "./auth/auth.module"

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: "src/schema.gql",
      context: ({ req, res }) => ({ req, res }),
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
    AuthModule,
  ],
  providers: [],
})
export class AppModule {}
