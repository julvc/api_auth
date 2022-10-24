import { IUserCreateDto } from "../../dtos/user.dto";

export interface IAuthRepository{
    authenticate(email: string, password: string): Promise<string>;
    create(user: IUserCreateDto): Promise<void>;


}