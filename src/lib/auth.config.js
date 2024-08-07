import { NextResponse } from "next/server";
export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user.id = token.id;
        }
        return session;

      },
      async redirect({url,baseUrl}) {
        if (url.startsWith(baseUrl)){
        return url;
      }
      return baseUrl;

    },
 
      authorized({ auth, request }) {
        const user = auth?.user;
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
  
   
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/search", request.nextUrl));
        }
  
        return true
      },
    },
  };
