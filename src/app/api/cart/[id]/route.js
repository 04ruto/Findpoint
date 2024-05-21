import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function DELETE(req, { params }, res) {
  const prodId = params.id;
  console.log(prodId);

  const existingItem = await db.cart.findFirst({
    where: {
      id: parseInt(prodId),
    },
  });

  if (existingItem.quantity > 1) {
    await db.cart.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: parseInt(existingItem.quantity) - 1,
      },
    });
  } else {
    await db.cart.delete({
      where: {
        id: existingItem.id,
      },
    });
  }

  return NextResponse.json({ message: "Product deleted" });
}

export async function GET({ params }) {
  const { userid } = params;

  const userCart = await db.cart.findUnique({
    where: {
      userid: parseInt(userid),
    },
  });

  return NextResponse.json(userCart);
}

// export async function PUT(request, { params, body }, res) {
//   console.log("PUT - server");
//   const { id } = params;
//   const data = await request.json();

//   await db.product.update({
//     where: {
//       id: parseInt(id),
//     },
//     data: {
//       name: data.name,
//       description: data.description,
//       price: parseFloat(data.price),
//       company: data.company,
//     },
//   });

//   return NextResponse.json({ message: "User updated" });
// }
