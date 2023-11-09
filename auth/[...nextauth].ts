import {PrismaAdapter} from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'

import { Prisma } from '@prisma/client'

// 「process.env」により
// メールサーバ / 送信元メール / パスワードを環境変数を読み込み、
// 1つでも値が存在しない場合はエラーを返す。
const EMAIL_SERVER = process.env.EMAIL_SERVER
const EMAIL_FROM = process.env.EMAIL_FROM
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET

if (!EMAIL_SERVER || !EMAIL_FROM || !NEXTAUTH_SECRET) {
  throw new Error('EMAIL_SERVER, EMAIL_FROM, NEXTAUTH_SECRET not found.')
}

export default NextAuth({
  adapter: PrismaAdapter(Prisma),
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM
    }),
  ],
  secret: NEXTAUTH_SECRET,
})
