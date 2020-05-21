import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Provider } from 'oidc-provider';

@Injectable()
export class OidcService implements OnModuleInit {

    private provider: Provider;

    constructor(
        private readonly configService: ConfigService,
    ) {}

    onModuleInit() {
        this.provider = new Provider(`http://localhost:3000`);
    }

    getProvider() {
        return this.provider;
    }

}
