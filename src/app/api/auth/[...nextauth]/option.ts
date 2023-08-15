import { postRequest } from "@/components/auth/api/postRequest";
import { HOST } from "@/utils/constant";
import type { Session } from "next-auth";
import { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  pages:{
    signIn:"/",
    signOut:"/home",
  },
  providers: [
    CredentialsProvider({
      name: "AMS",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const loginUrl = `${HOST}/api/login/`;

        const res = await postRequest(loginUrl, {
        email: credentials?.email,
        password: credentials?.password,
        });

        const resData = await res.json();

        if (res.ok) {
          return resData;
        }
        return null;
        },   

    }),
  ],
  callbacks: {
    async jwt({ token, user,}) {
      return {...token, ...user};
    },
    // custom sesssion
    async session({ session,token,user }: {session: Session, token: JWT, user:AdapterUser}) {
      session.user = token
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
