import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(): Promise<import("../entity/Tutor").Tutor[]>;
    signin(): string;
}
