import { ConfigService } from "@nestjs/config";
import { JwtModule, JwtModuleOptions } from "@nestjs/jwt";
import { config } from "dotenv";


export async function getJwtConfig (
    ConfigService: ConfigService,
): Promise<JwtModuleOptions> {
    return {
        secret: ConfigService.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
            algorithm: 'HS256',
        },
        verifyOptions: {
            algorithms: ['HS256'],
            ignoreExpiration: false,
        },
    }
}