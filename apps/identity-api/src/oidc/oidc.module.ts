import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { OidcMiddleware } from './oidc.middleware';
import { ConfigModule } from '@nestjs/config';
import { OidcService } from './oidc.service';

@Module({
    imports: [ConfigModule],
    providers: [OidcService],
})
export class OidcModule implements NestModule{
    
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(OidcMiddleware).forRoutes('oidc');
    }
}
