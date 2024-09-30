import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"



export const authOptions:NextAuthOptions = {
  
  adapter: PrismaAdapter( prisma ) as Adapter,
  
  providers: [

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? '',
    }),

    // ...add more providers here

  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {

    async signIn({ user, account, profile, email, credentials}) {

      return true;
    },

    async jwt({ token, user, account, profile}) {
      console.log(token);

      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? ''}}) // se puede forzar con token.email! porque siempre deberia haber email.

      token.rolen = dbUser?.roles ?? ['no-roles']
      token.rolen = dbUser?.roles ?? ['no-uuid']

      return token;
    },


    async session ({ session, user, token }) {

      return session;
    }

  }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };