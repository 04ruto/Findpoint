"use client";

import CartItem from "@/components/cartItem";
import React, { useEffect, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  const handleRefresh = () => {
    getItems();
  };

  console.log(items);

  return (
    <main>
      <div className="min-h-[80vh] bg-gray-100 pt-10">
        {/* <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
        <div className=" mx-10 justify-center flex space-x-6">
          <div className="rounded-lg md:w-2/3">
            {/* <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img
                src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="product-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      -{" "}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-black text-center text-xs outline-none"
                      type="number"
                      value="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {" "}
                      +{" "}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-black">
                    <p className="text-sm">259.000 ₭</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}

            {items.map((item) => (
              <CartItem item={item} toRefresh={handleRefresh} />
            ))}
          </div>
          {/* SUBTOTAL */}
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">
                {items.reduce(
                  (acc, item) =>
                    // return console.log(item);
                    (
                      parseFloat(acc) +
                      parseInt(item.quantity) * parseFloat(item.price)
                    ).toFixed(2),
                  0
                )}{" "}
                <span className="text-gray-500">EUR</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">
                5.99 <span className="text-gray-500">EUR</span>
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold text-black">
                  {(
                    parseFloat(
                      items.reduce(
                        (acc, item) =>
                          (
                            parseFloat(acc) +
                            parseInt(item.quantity) * parseFloat(item.price)
                          ).toFixed(2),
                        0
                      )
                    ) + 5.99
                  ).toFixed(2)}{" "}
                  EUR
                </p>
                <p className="text-sm text-gray-700">IVA incluido</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Pagar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
