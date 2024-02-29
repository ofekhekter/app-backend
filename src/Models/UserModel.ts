export type RolesType = "user" | "admin";

export type UserType = {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    password: string;
    role: RolesType;
}