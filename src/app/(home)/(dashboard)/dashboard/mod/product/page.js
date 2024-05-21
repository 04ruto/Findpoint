"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

export default function addClient() {
  // IMPORTACIÓ DE MODULS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  // CREACIÓ DEL PRODUCTE
  const onSubmit = handleSubmit(async (data) => {
    // Envia la petició POST

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("company", data.company);
    formData.append("quantity", data.quantity);

    const res = await fetch("/api/prod", {
      method: "POST",
      body: formData,
    });
    // Mostra la resposta
    // const resJSON = await res.json();
    // console.log(resJSON);
    // console.log(res);
    // Redireccióna a la pàgina de login
    if (res.ok) {
      router.push("/dashboard/product");
    }
  });
  return (
    <main>
      <div className="py-10 flex w-full justify-center items-center">
        <form className="" onSubmit={onSubmit}>
          <p className="text-3xl font-semibold text-[#061a40] mb-4">
            {" "}
            Añadir producto
          </p>

          {errors.image && (
            <span className="text-red-500 text-xs">
              Este campo es obligatorio
            </span>
          )}
          <label className="flex flex-col items-center py-3 bg-white text-black rounded uppercase border-2 border-black border-opacity-50 cursor-pointer mb-4">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2">{fileName || "SELECCIONE UNA IMAGEN"}</span>
            <input
              type="file"
              name="image"
              className="hidden"
              onInput={(e) => {
                setFile(e.target.files?.[0]);
                setFileName(e.target.files?.[0].name);
              }}
              {...register("image", { required: true })}
            />
          </label>

          {/* NOM */}
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
              className="pl-2 w-full outline-none border-none text-[#061a40]"
              type="text"
              name="name"
              placeholder="Nombre"
              {...register("name", { required: true })}
            />
          </div>

          {/* DESCRIPCIÓ */}
          {errors.description && (
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
              <path d="M288 64c0 17.7-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32H256c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>

            <input
              className="pl-2 w-full outline-none border-none text-[#061a40]"
              type="text"
              name="description"
              placeholder="Descripción"
              {...register("description", { required: true })}
            />
          </div>

          {/* PREU */}
          {errors.price && (
            <span className="text-red-500 text-xs">
              Este campo es obligatorio
            </span>
          )}
          <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8v16c0 2.7 0 5.3 .1 8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H60.3C89.9 419.9 170 480 264 480h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H264c-57.9 0-108.2-32.4-133.9-80H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112.2c-.1-2.6-.2-5.3-.2-8V248c0-2.7 .1-5.4 .2-8H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H130.1c25.7-47.6 76-80 133.9-80h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H264C170 32 89.9 92.1 60.3 176H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48.1z" />
            </svg>

            <input
              className="pl-2 outline-none border-none text-[#061a40]"
              type="text"
              pattern="[0-9]+([.][0-9]+)?"
              name="price"
              placeholder="xx.xx"
              {...register("price", { required: true })}
            />
          </div>

          {/* QUANTIAT */}
          {errors.quantity && (
            <span className="text-red-500 text-xs">
              Este campo es obligatorio
            </span>
          )}
          <div className="flex items-center border-2 border-black border-opacity-50 py-2 px-3 rounded mb-4 bg-white">
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8v16c0 2.7 0 5.3 .1 8H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H60.3C89.9 419.9 170 480 264 480h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H264c-57.9 0-108.2-32.4-133.9-80H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H112.2c-.1-2.6-.2-5.3-.2-8V248c0-2.7 .1-5.4 .2-8H256c17.7 0 32-14.3 32-32s-14.3-32-32-32H130.1c25.7-47.6 76-80 133.9-80h24c17.7 0 32-14.3 32-32s-14.3-32-32-32H264C170 32 89.9 92.1 60.3 176H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48.1z" />
            </svg>

            <input
              className="pl-2 outline-none border-none text-[#061a40]"
              type="text"
              pattern="^[0-9]+(?:\.[0-9]+)?\s*[A-Za-z]+$"
              name="quantity"
              placeholder="x Kg / x L"
              {...register("quantity", { required: true })}
            />
          </div>

          {/* COMPANYIA */}
          {errors.company && (
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
              <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z" />
            </svg>
            <input
              className="pl-2 w-full outline-none border-none text-[#061a40]"
              type="text"
              name="company"
              placeholder="Compañía/Marca"
              {...register("company", { required: true })}
            />
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
