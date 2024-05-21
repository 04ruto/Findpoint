import { NextResponse } from "next/server";
import db from "@/libs/db";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req, res) {
  const session = await getServerSession(authOptions);

  const user = await db.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const cart = await db.cart.findMany({
    where: {
      userId: user.id,
    },
  });

  return NextResponse.json(cart);
}

export async function POST(request) {
  const session = await getServerSession(authOptions);

  try {
    const user = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    const data = await request.json();

    const prodId = data.prodId;
    const userId = user.id;

    const existingItem = await db.cart.findFirst({
      where: {
        productId: prodId,
        userId: userId,
      },
    });

    if (existingItem) {
      await db.cart.update({
        where: {
          id: existingItem.id,
        },
        data: {
          quantity: parseInt(existingItem.quantity) + 1,
        },
      });
    } else {
      await db.cart.create({
        data: {
          userId: parseInt(userId),
          productId: parseInt(prodId),
          price: parseFloat(data.prodPrice),
          quantity: 1,
        },
      });

      // res.status(200).json(newCartItem);
    }

    // return NextResponse.json(newProd);
    return NextResponse.json("Ok");
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
