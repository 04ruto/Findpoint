import { NextResponse } from "next/server";
import db from "@/libs/db";
import bcrypt from "bcrypt";

export async function DELETE(req, { params }, res) {
  const { id } = params;

  await db.user.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({ message: "User deleted" });
}

export async function GET(req, { params }, res) {
  const { id } = params;

  const user = await db.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json(user);
}

export async function PUT(request, { params, body }, res) {
  console.log("PUT - server");
  const { id } = params;
  const data = await request.json();

  const user = await db.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  let newHashedPassword;

  if (data.newPassword == "") {
    newHashedPassword = user.password;
  } else {
    newHashedPassword = await bcrypt.hash(data.newPassword, 10);

    const matchPassword = await bcrypt.compare(data.oldPassword, user.password);

    if (!matchPassword) throw new Error("Contraseña incorrecta");
  }

  await db.user.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: data.name,
      password: newHashedPassword,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
      company: data.company,
      companyID: data.companyID,
      role: data.role,
    },
  });

  return NextResponse.json({ message: "User updated" });
}
