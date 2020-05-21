import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { OidcModule } from './oidc/oidc.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    OidcModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
