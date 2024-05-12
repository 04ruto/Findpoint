"use client";

import React, { useState, useEffect } from "react";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await fetch("http://localhost:3000/api/user");
      const data = await res.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  console.log(users);
  return (
    <main>
      <div>
        <div class="flex bg-white min-h-[70vh]">
          <nav class="pt-2 fixed inset-0 left-0 z-30 w-64 transition duration-300 transform bg-white border-2 border-r-[#061a40] lg:translate-x-0 lg:static ">
            <a
              class="flex items-center px-6 py-2 mt-4 text-black hover:bg-[#abc4ff] hover:bg-opacity-60"
              href="#"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>

              <span class="mx-3">Clientes</span>
            </a>

            <a
              class="flex items-center px-6 py-2 mt-4 text-black hover:bg-[#abc4ff] hover:bg-opacity-60"
              href="#"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                ></path>
              </svg>

              <span class="mx-3">Productos</span>
            </a>
          </nav>
          <div class="flex flex-col flex-1 overflow-hidden">
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <div class="container px-6 py-8 mx-auto">
                <h3 class="text-3xl font-medium text-gray-700">Dashboard</h3>

                <div class="mt-4">
                  <div class="flex flex-wrap -mx-6">
                    {/* PANEL 1 */}
                    <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                      <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div class="p-3 bg-indigo-600 bg-opacity-75 rounded-full">
                          <svg
                            class="w-8 h-8 text-white"
                            viewBox="0 0 28 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>

                        <div class="mx-5">
                          <h4 class="text-2xl font-semibold text-gray-700">
                            8,282
                          </h4>
                          <div class="text-gray-500">New Users</div>
                        </div>
                      </div>
                    </div>

                    {/* PANEL 2 */}
                    <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                      <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div class="p-3 bg-orange-600 bg-opacity-75 rounded-full">
                          <svg
                            class="w-8 h-8 text-white"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>

                        <div class="mx-5">
                          <h4 class="text-2xl font-semibold text-gray-700">
                            200,521
                          </h4>
                          <div class="text-gray-500">Total Orders</div>
                        </div>
                      </div>
                    </div>

                    {/* PANEL 3 */}
                    <div class="w-full px-6 mt-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                      <div class="flex items-center px-5 py-6 bg-white rounded-md shadow-sm">
                        <div class="p-3 bg-pink-600 bg-opacity-75 rounded-full">
                          <svg
                            class="w-8 h-8 text-white"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.99998 11.2H21L22.4 23.8H5.59998L6.99998 11.2Z"
                              fill="currentColor"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M9.79999 8.4C9.79999 6.08041 11.6804 4.2 14 4.2C16.3196 4.2 18.2 6.08041 18.2 8.4V12.6C18.2 14.9197 16.3196 16.8 14 16.8C11.6804 16.8 9.79999 14.9197 9.79999 12.6V8.4Z"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </svg>
                        </div>

                        <div class="mx-5">
                          <h4 class="text-2xl font-semibold text-gray-700">
                            215,542
                          </h4>
                          <div class="text-gray-500">Available Products</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-8"></div>

                <h3 class="text-3xl font-medium text-gray-700">Clientes</h3>

                <div class="flex flex-col mt-8">
                  <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                      <table class="min-w-full">
                        <thead>
                          <tr>
                            <th class="px-4 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                              Rol
                            </th>
                            <th class="px-4 py-3 text-xs text-left font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                              Nombre
                            </th>
                            <th class="px-2 py-3 text-xs text-left font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                              Compañía
                            </th>
                            <th class="px-2 py-3 text-xs text-left font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                              Contacto
                            </th>
                            <th class="px-2 py-3 text-xs text-center font-medium leading-4 tracking-wider text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                              Operación
                            </th>
                          </tr>
                        </thead>

                        <tbody class="bg-white">
                          {users.map((user) => (
                            <tr key={user.id}>
                              <td class="py-4 text-sm font-medium text-gray-900 border-b border-gray-200 text-center">
                                {user.role}
                              </td>

                              <td class="py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="ml-5">
                                  <div class="text-sm font-medium text-gray-900">
                                    {user.name}
                                  </div>
                                  <div class="text-sm text-gray-500">
                                    {user.email}
                                  </div>
                                </div>
                              </td>

                              <td class="py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">
                                  {user.company}
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                  {user.companyID}
                                </div>
                              </td>

                              <td class="py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">
                                  {user.phoneNumber}
                                </div>
                                <div class="text-sm leading-5 text-gray-500">
                                  {user.address}
                                </div>
                              </td>

                              <td class="py-4 text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200">
                                <button
                                  //   onClick={alert("Edit")}
                                  class="text-indigo-600 hover:text-indigo-900"
                                >
                                  Edit
                                </button>
                                <button
                                  //   onClick={alert("Eliminar")}
                                  class="text-red-600 hover:text-red-900 ml-5"
                                >
                                  Eliminar
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
