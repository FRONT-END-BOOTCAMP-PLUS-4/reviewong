import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import { PrUserRepository } from '@/infra/repositories/prisma/PrUserRepository';
import { SocialLoginUseCase } from '@/application/usecases/auth/SocialLoginUseCase';
import { CredentialsLoginUseCase } from '@/application/usecases/auth/CredentialsLoginUseCase';

const userRepository = new PrUserRepository(prisma);
const credentialsLoginUseCase = new CredentialsLoginUseCase(userRepository);
const socialLoginUseCase = new SocialLoginUseCase(userRepository);

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const user = await credentialsLoginUseCase.execute({
            email: credentials?.email ?? '',
            password: credentials?.password ?? '',
          });
          return {
            id: user.id,
            email: user.email,
            name: user.nickname,
            image: user.imageUrl,
          };
        } catch (error) {
          throw error;
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'github' || account?.provider === 'google') {
        return socialLoginUseCase.execute({
          id: user.id,
          email: user.email!,
          name: user.name ?? null,
          image: user.image ?? null,
        });
      }
      return true;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
