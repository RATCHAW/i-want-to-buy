import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpStatus } from "@nestjs/common"
import { ZodSchema } from "zod"

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  async transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      return await this.schema.parseAsync(value)
    } catch (error) {
      console.log(error)
      console.log(value)
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        errors: error.errors,
        message: "Validation error",
      })
    }
  }
}
