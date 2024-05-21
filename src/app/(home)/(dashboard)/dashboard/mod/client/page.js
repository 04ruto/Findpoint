"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function addClient() {
  // IMPORTACIÓ DE MODULS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  // CREACIÓ DE L'USUARI
  const onSubmit = handleSubmit(async (data) => {
    // Comprova les contrasenyes
    if (data.password !== data.confirmPassword) {
      return alert("Las contraseñas no coinciden");
    }

    // Envia la petició POST
    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        password: data.password,
        email: data.email,
        phoneNumber: data.phoneNumber,
        address: data.address,
        company: data.company,
        companyID: data.companyID,
      }),
    });

    // Mostra la resposta
    // const resJSON = await res.json();
    // console.log(resJSON);

    console.log(res);

    // Redireccióna a la pàgina de login
    if (res.ok) {
      router.push("/dashboard/client");
    }
  });
  return (
    <main>
      <div className="py-10 flex w-full justify-center items-center">
        <form className="" onSubmit={onSubmit}>
          <p className="text-3xl font-semibold text-[#061a40] mb-4">
            {" "}
            Añadir cliente
          </p>
          <div className="flex gap-5">
            {/* COLUMNA 1 */}
            <div className="w-1/2">
              {/* NOMBRE */}
              {errors.name && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>

                <input
                  className="pl-2 outline-none border-none text-[#061a40]"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  {...register("name", { required: true })}
                />
              </div>{" "}
              {/* <InputField
                name="name"
                type="text"
                placeholder="Nombre"
                errors={errors.name}
                svg={
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                }
                {...register("name", { required: true })}
              /> */}
              {/* CONTRASENYA */}
              {errors.password && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
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
              {/* CONFIRMAR CONTRASENYA */}
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
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
                  placeholder="Confirma la contraseña"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
              {/* EMAIL */}
              {errors.email && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
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
            </div>

            {/* COLUMNA 2 */}
            <div className="w-1/2">
              {/* COMPANYIA */}
              {errors.company && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 640 512"
                >
                  <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
                </svg>
                <input
                  className="pl-2 outline-none border-none text-[#061a40]"
                  type="text"
                  name="company"
                  placeholder="Compañia"
                  {...register("company", { required: true })}
                />
              </div>

              {/* ID DE LA COMPANYIA */}
              {errors.companyID && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                <input
                  className="pl-2 outline-none border-none text-[#061a40]"
                  type="text"
                  name="companyID"
                  placeholder="CIF"
                  {...register("companyID", { required: true })}
                />
              </div>

              {/* TELÈFON */}
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
                </svg>
                <input
                  className="pl-2 outline-none border-none text-[#061a40]"
                  type="tel"
                  name="phoneNumber"
                  placeholder="Teléfono"
                  {...register("phoneNumber", { required: true })}
                />
              </div>

              {/* DIRECCIÓ EMPRESA */}
              {errors.address && (
                <span className="text-red-500 text-xs">
                  Este campo es obligatorio
                </span>
              )}
              <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                <input
                  className="pl-2 outline-none border-none text-[#061a40]"
                  type="text"
                  name="address"
                  placeholder="Dirección"
                  {...register("address", { required: true })}
                />
              </div>
            </div>
          </div>

          <button
            // onClick={AddUser}
            className="block w-full border-2 border-black mt-4 py-2 rounded text-black font-semibold hover:bg-[#061a40] hover:bg-opacity-60 transition duration-500"
          >
            Añadir
          </button>
        </form>
      </div>
    </main>
  );
}
