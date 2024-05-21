"use client";

import InfExtra from "@/components/totalProductos";
import ProdList from "@/components/prodList";
import React, { useState, useEffect } from "react";
import ClientesTotal from "@/components/totalClientes";
import ComprasTotal from "@/components/totalCompras";
import ProductosTotal from "@/components/totalProductos";
// import UserList from "@/components/userList";

export default function Dashboard() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    getProds();
  }, []);

  async function getProds() {
    try {
      const res = await fetch("/api/prod");
      const data = await res.json();
      setProds(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function delProd(id) {
    console.log("ID:", id);
    try {
      const res = await fetch("/api/prod/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      getProds();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  return (
    <>
      <div className="mt-4">
        <div className="flex flex-wrap -mx-6">
          {/* PANELL 1 */}
          <ClientesTotal />
          {/* PANELL 2 */}
          <ComprasTotal />
          {/* PANELL 3 */}
          <ProductosTotal />
        </div>
      </div>

      <div className="mt-8"></div>
      <h3 className="text-3xl font-medium text-gray-700">
        Productos{" "}
        <sub>
          <a href="/dashboard/mod/product" className="text-sm text-green-500">
            {" "}
            (Añadir)
          </a>
        </sub>
      </h3>

      <div className="flex flex-col mt-8">
        <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Marca
                  </th>
                  <th className="px-4 py-3 text-xs text-left font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Nombre
                  </th>
                  <th className="px-2 py-3 text-xs text-left font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Descripción
                  </th>
                  <th className="px-2 py-3 text-xs text-left font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Precio
                  </th>
                  <th className="px-2 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Cantidad
                  </th>
                  <th className="px-2 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Operación
                  </th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {prods.map((prod) => (
                  <ProdList prod={prod} delProd={delProd} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
