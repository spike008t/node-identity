import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { OidcService } from './oidc.service';
import { Provider } from 'oidc-provider';

@Injectable()
export class OidcMiddleware implements NestMiddleware {

    constructor(
        private readonly oidcService: OidcService,
    ) {}

    use(req: Request, res: Response) {
        this.oidcService.getProvider().callback(req, res);
    }
}