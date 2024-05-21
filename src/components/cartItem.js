"use client";

import React, { useEffect, useState } from "react";

export default async function CartItem({ item, toRefresh }) {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    getProd();
  }, []);

  async function getProd() {
    try {
      const res = await fetch(`/api/prod/${item.productId}`);
      const data = await res.json();
      setProd(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  async function deleteItem() {
    try {
      const res = await fetch(`/api/cart/${item.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        console.log("Item deleted");
        toRefresh();
        // window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  return (
    <>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={prod.src}
          alt="product-image"
          className="w-full rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-xl font-bold text-gray-900">{prod.name}</h2>
            <p className="mt-1 text-gray-700">{prod.description}</p>
            <p className="mt-1 text-xs text-gray-700">
              Cantidad: {prod.quantity}
            </p>
            <p className="mt-1 text-xs text-gray-700">Marca: {prod.company}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="h-8 w-full bg-white text-black text-center text-lg outline-none">
              {item.quantity} uds.
            </div>
            <div className="flex items-center space-x-4 text-black">
              <p className="text-md">{parseFloat(prod.price).toFixed(2)} €</p>
              <svg
                onClick={deleteItem}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                stroke-width="1.5"
                className="h-6 w-6 cursor-pointer transition duration-500 hover:text-red-500"
              >
                <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
