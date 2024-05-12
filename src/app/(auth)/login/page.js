"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Signup() {
  // IMPORTACIÓ DE MODULS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  // CREACIÓ DE L'USUARI
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res.error) {
      //   alert(res.error);
      setError(res.error);
    } else {
      router.push("/");
    }

    console.log(res);
  });

  console.log(errors);

  return (
    <main>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#061a40] to-[#abc4ff] i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              Findpoint
            </h1>
            <p className="text-white mt-1">
              Expertos en Distribución de Alimentos
            </p>

            <a
              href="/about"
              className="text-center block w-fit bg-white text-indigo-800 mt-4 py-2 px-4 rounded-2xl font-bold"
            >
              Sobre nosotros
            </a>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center items-center bg-white">
          <form className="bg-white" onSubmit={onSubmit}>
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              ¡Hola de nuevo!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-4">
              Bienvenido de nuevo
            </p>

            {error && (
              <p className="text-white bg-red-500 text-center w-full rounded p-2 mb-2">
                {error}
              </p>
            )}

            {/* EMAIL */}
            {errors.email && (
              <span className="text-red-500 text-xs">
                Este campo es obligatorio
              </span>
            )}
            <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
              </svg>
              <input
                className="pl-2 outline-none border-none text-[#061a40]"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                {...register("email", { required: true })}
              />
            </div>

            {/* CONTRASENYA */}
            {errors.password && (
              <span className="text-red-500 text-xs">
                Este campo es obligatorio
              </span>
            )}
            <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
              </svg>

              <input
                className="pl-2 outline-none border-none text-[#061a40]"
                type="password"
                name="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />
            </div>

            <button
              type="submit"
              // onClick={AddUser}
              className="block w-full border-2 border-black mt-4 py-2 rounded text-black font-semibold hover:bg-[#061a40] hover:bg-opacity-60 transition duration-500"
            >
              Iniciar Session
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
