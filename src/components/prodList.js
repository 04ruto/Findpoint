import React from "react";

export default function ProdList({ prod, delProd }) {
  return (
    <>
      <tr key={prod.id}>
        <td className="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-center">
          {prod.company}
        </td>

        <td className="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-left pl-4">
          {prod.name}
        </td>

        <td className="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-left pl-4">
          {prod.description}
        </td>

        <td className="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-left pl-4">
          {parseFloat(prod.price).toFixed(2)} €
        </td>

        <td className="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-center pl-4">
          {prod.quantity}
        </td>

        <td className="py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
          <a
            href={"/dashboard/mod/product/" + prod.id}
            className="text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </a>
          <button
            onClick={() => delProd(prod.id)}
            className="text-red-600 hover:text-red-900 ml-5"
          >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
}
