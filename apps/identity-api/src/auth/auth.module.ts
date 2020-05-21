import { Module } from '@nestjs/common';
import { UsersModule } from '..//users/users.module';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
    imports: [
        UsersModule,
        PassportModule,
    ],
    controllers: [],
    providers: [
        AuthService,
        LocalStrategy,
    ],
    exports: [],
})
export class AuthModule {}