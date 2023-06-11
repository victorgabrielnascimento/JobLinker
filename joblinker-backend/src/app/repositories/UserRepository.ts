import { IUser } from "../interfaces/user/user.interface";
const Address = require('../models/index').Address;

const User = require('../models/index').User;

export class UserRepository {
    async createUser(user: IUser): Promise<IUser> {
        return await await User.create(user, {include: Address});
    }
}