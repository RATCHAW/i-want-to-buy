import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import * as cookieParser from "cookie-parser"
import type { NestExpressApplication } from "@nestjs/platform-express"
import { graphqlUploadExpress } from "graphql-upload-ts"

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true })
  app.set("trust proxy", 1)
  app.enableCors({
    origin: ["http://localhost:4000", "http://localhost:3000", "https://studio.apollographql.com/"],
    credentials: true,
  })
  app.use(cookieParser())
  app.useBodyParser("json", { limit: "20mb", extends: true })
  app.use(graphqlUploadExpress({ maxFileSize: 5000000000000000, maxFiles: 10 }))

  await app.listen(4000)
}
bootstrap()
