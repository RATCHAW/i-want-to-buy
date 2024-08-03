import { Global, Module } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { ImageKitModule } from "imagekit-nestjs" // Replace with actual package name
import imageKitConfig from "src/config/imagekit"

@Global()
@Module({
  imports: [
    ImageKitModule.forRootAsync({
      useFactory: async (configService) => imageKitConfig(configService),
      inject: [ConfigService],
    }),
  ],
  exports: [ImageKitModule],
})
export class ImageKitWrapperModule {}
