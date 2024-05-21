import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "correo@ejemplo.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        console.log("Credentials:", credentials);

        const userFound = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if (!userFound) return null;
        if (!userFound) throw new Error("Usuario no encontrado");

        console.log("User: ", userFound);

        const matchPassword = await bcrypt.compare(
          credentials.password,
          userFound.password
        );

        // if (!matchPassword) return null;
        if (!matchPassword) throw new Error("Contraseña incorrecta");

        return {
          id: userFound.id,
          name: userFound.name,
          email: userFound.email,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
