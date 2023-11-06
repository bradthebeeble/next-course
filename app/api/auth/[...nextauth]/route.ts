import NextAuth from "next-auth/next";
import GoogleProvider  from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers : [
        GoogleProvider({
            clientId: '404731040121-ev0qec3ea5df2ddv16b206sv33sv86rv.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ],
    session: {
        strategy: 'jwt'
    }
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}