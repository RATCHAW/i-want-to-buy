import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Request } from "express"
import { verify } from "jsonwebtoken"
import { GqlExecutionContext } from "@nestjs/graphql"

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext()

    const token = this.extractTokenFromHeader(ctx["req"])
    if (!token) {
      throw new UnauthorizedException()
    }
    try {
      const payload = verify(token, this.configService.get<string>("JWT_ACCESSTOKEN_SECRET"))
      ctx.req["user"] = payload
    } catch {
      throw new UnauthorizedException()
    }
    return true
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const access_token = request.cookies["access_token"]
    return access_token
  }
}
