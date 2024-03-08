import { UserType } from "../Models/UserModel";
import { insertUserToDB } from "../Utils/dal";


export const registerUser = async (newUser: UserType): Promise<UserType> => {
    insertUserToDB(newUser.firstname, newUser.lastname, newUser.username, newUser.password, newUser.role)
    return newUser;
}