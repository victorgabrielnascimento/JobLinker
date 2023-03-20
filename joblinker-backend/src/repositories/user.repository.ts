import { IUser } from "../interfaces/user/user.interface";

class UserRepository {
    async create(user: IUser): Promise<User> {
        const newUser = await this.userModel.create(user);
        return newUser;
    }
}