import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session{
        user: {
            access: string;
            refresh: string;
            userId: number;
            first_name: string;
            role: number;
        };
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        access: string;
        refresh: string;
        userId: number;
        first_name: string;
        role: number;
    }
}
