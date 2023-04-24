import { Repository } from 'typeorm';
import { Tutor } from '../entity/Tutor';
export declare class AuthService {
    private tutorReository;
    constructor(tutorReository: Repository<Tutor>);
    signin(): string;
    signup(): Promise<any[]>;
}
