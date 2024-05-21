import { useRouter } from "next/navigation";
import React from "react";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProductCard({ prod }) {
  // const session = await getServerSession(authOptions);
  const router = useRouter();

  const handleAddToCart = async () => {
    try {
      const res = await fetch(`/api/cart`, {
        method: "POST",
        body: JSON.stringify({
          prodId: prod.id,
          prodPrice: prod.price,
          // userId: user.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        console.log("Product added to cart");
      } else {
        alert("Inicia sesión para añadir productos al carrito!");
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
      <article className="rounded bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        {/* <a href="#"> */}
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img src={prod.src} alt="Product Image" />
        </div>

        <div className="mt-1 p-2">
          <h2 className="text-slate-700">{prod.name}</h2>
          <sup className="text-slate-700">({prod.company})</sup>
          <p className="my-1 text-sm text-slate-400">{prod.description}</p>
          <p className="my-1 text-sm text-slate-400">{}</p>

          <p className="text-sm text-slate-400 h-10">
            Cantidad: {prod.quantity}
          </p>

          <div className="mt-3 flex items-end justify-between">
            <p className="text-lg font-bold text-blue-500">
              {parseFloat(prod.price).toFixed(2)} €
            </p>

            <div
              className="flex border-2 border-black items-center space-x-1.5 rounded bg-[#abc4ff] px-4 py-1.5 text-black transition duration-500 hover:bg-[#061a40]/75 hover:text-white cursor-pointer"
              onClick={handleAddToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <button className="text-sm">Añadir al carrito</button>
            </div>
          </div>
        </div>
        {/* </a> */}
      </article>
    </>
  );
}
