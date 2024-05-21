import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function DELETE(req, { params }, res) {
  const { id } = params;

  await db.product.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({ message: "Product deleted" });
}

export async function GET(req, { params }, res) {
  const { id } = params;

  const prod = await db.product.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json(prod);
}

export async function PUT(request, { params, body }, res) {
  console.log("PUT - server");
  const { id } = params;
  const data = await request.json();

  await db.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      quantity: data.quantity,
      company: data.company,
    },
  });

  return NextResponse.json({ message: "User updated" });
}
