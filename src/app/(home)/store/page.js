"use client";

import ProductCard from "@/components/productCard";
import React, { useState, useEffect } from "react";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default function Store() {
  // const session = await getServerSession(authOptions);
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

  return (
    <main>
      <section className="py-10 bg-gray-100 min-h-[80vh]">
        <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {prods.map((prod) => (
            <>
              <ProductCard prod={prod} />
            </>
          ))}
        </div>
      </section>
    </main>
  );
}
