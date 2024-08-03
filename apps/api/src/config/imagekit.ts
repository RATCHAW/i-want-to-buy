// import { ConfigService } from "@nestjs/config"
// const ImageKit = require("imagekit") as typeof import("imagekit")

import { ConfigService } from "@nestjs/config"

export default (configService: ConfigService) => ({
  publicKey: configService.get<string>("IMAGEKIT_PUBLIC_KEY"),
  privateKey: configService.get<string>("IMAGEKIT_PRIVATE_KEY"),
  urlEndpoint: configService.get<string>("IMAGEKIT_URL_ENDPOINT"),
})
