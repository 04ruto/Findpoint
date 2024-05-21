import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import db from "@/libs/db";
import bcrypt from "bcrypt";
import { join } from "path";

export async function GET(req, res) {
  const prods = await db.product.findMany();
  return NextResponse.json(prods);
}

export async function POST(request) {
  try {
    // const data = await request.json();
    const data = await request.formData();
    const file = data.get("image");

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log(file.name);
    const path = join(process.cwd(), "public/img", file.name);
    console.log(path);
    await writeFile(path, buffer);

    const newProd = await db.product.create({
      data: {
        name: data.get("name"),
        description: data.get("description"),
        price: parseFloat(data.get("price")),
        company: data.get("company"),
        src: `/img/${file.name}`,
        quantity: data.get("quantity"),
      },
    });

    // Retorna l'usuari sense la contrasenya

    return NextResponse.json(newProd);
    // return NextResponse.json("Ok");
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
