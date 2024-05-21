import React from "react";

export default function UserList({ user, delUser }) {
  return (
    <tr key={user.id}>
      <td className="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-center">
        {user.role}
      </td>

      <td className="py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="ml-5">
          <div className="text-sm font-medium text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </td>

      <td className="py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">{user.company}</div>
        <div className="text-sm leading-5 text-gray-500">{user.companyID}</div>
      </td>

      <td className="py-4 whitespace-no-wrap border-b border-gray-200">
        <div className="text-sm leading-5 text-gray-900">
          {user.phoneNumber}
        </div>
        <div className="text-sm leading-5 text-gray-500">{user.address}</div>
      </td>

      <td className="py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
        <a
          href={"/dashboard/mod/client/" + user.id}
          className="text-indigo-600 hover:text-indigo-900"
        >
          Edit
        </a>
        <button
          onClick={() => delUser(user.id)}
          className="text-red-600 hover:text-red-900 ml-5"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}
