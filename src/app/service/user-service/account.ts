import { AccountRole } from "./accountRole";
export interface Account{
    accountId: number;
    email: string;
    username: string;
    password: string;
    createTime: string;
    roleId: {
        [key: string]: AccountRole
    };
    points: number;
}