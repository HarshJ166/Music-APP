import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
          clientId: "1084828078888-55555555555555555555555555555555.apps.googleusercontent.com",
          clientSecret: "GOCSPX-12345678901234567890123456789012"
        })
      ]
})

export {handler as GET, handler as POST}