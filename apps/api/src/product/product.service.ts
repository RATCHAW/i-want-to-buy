import { Injectable } from "@nestjs/common"
import prisma from "../config/prisma"
import { Context } from "src/types/global"
import { Prisma } from "@prisma/client"
import { UserInputError } from "@nestjs/apollo"
import { ProductCreateArgs } from "./dto/product-create"
import { ImageKitService } from "imagekit-nestjs"

@Injectable()
export class ProductService {
  constructor(private readonly imageKitService: ImageKitService) {}
  async create(createProductInput: ProductCreateArgs, context: Context) {
    const imageUrls: string[] = await Promise.all(
      createProductInput.images.map(async (image) => {
        const file = await image
        return new Promise((resolve, reject) => {
          this.imageKitService.upload(
            {
              //@ts-ignore
              file: file.createReadStream(),
              fileName: file.filename,
            },
            (error, result) => {
              if (error) {
                reject(error)
              } else {
                resolve(result.url)
              }
            },
          )
        })
      }),
    )

    const { user_id } = context.req["user"]
    const product = await prisma.product.create({
      data: { ...createProductInput, images: imageUrls, userId: user_id },
    })
    return product
  }

  async findById(id: number) {
    try {
      return await prisma.product.findUnique({ where: { id }, include: { user: true } })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
        throw new UserInputError("Product not found")
      }
    }
  }

  async findMany(userId?: number, page?: number) {
    const PAGE_SIZE = 16
    const minimumPage = Math.min(page || 1, 1)

    return await prisma.product.findMany({
      where: { userId: userId || undefined },
      include: { user: true },
      skip: (minimumPage - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
    })
  }
}
