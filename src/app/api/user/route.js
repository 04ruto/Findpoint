import { NextResponse } from "next/server";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export async function GET(req, res) {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request) {
  try {
    const data = await request.json();

    // Comprova si l'usuari ja existeix
    const userFound = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });

    // Si l'usuari ja existeix, retorna un error
    if (userFound) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Encripta la contrasenya
    data.password = await bcrypt.hash(data.password, 10);
    // Crea l'usuari
    const newUser = await db.user.create({
      data: data,
    });

    // Retorna l'usuari sense la contrasenya
    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
    // Si hi ha un error, retorna un error 500
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
