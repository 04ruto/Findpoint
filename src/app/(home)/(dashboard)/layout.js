import RootLayout from "@/app/(home)/layout.js";
import Link from "next/link";

export default function DashboardLayout({ children: child }) {
  return (
    <>
      <main>
        <div>
          <div className="flex bg-white min-h-[70vh]">
            <nav className="pt-2 fixed inset-0 left-0 z-30 w-64 transition duration-300 transform bg-white border-2 border-r-[#061a40] lg:translate-x-0 lg:static ">
              <Link
                className="flex items-center px-6 py-2 mt-4 text-black hover:bg-[#abc4ff] hover:bg-opacity-60"
                href="/dashboard/client"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                </svg>

                <span className="mx-3">Clientes</span>
              </Link>

              <Link
                className="flex items-center px-6 py-2 mt-4 text-black hover:bg-[#abc4ff] hover:bg-opacity-60"
                href="/dashboard/product"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                  ></path>
                </svg>

                <span className="mx-3">Productos</span>
              </Link>
            </nav>
            <div className="flex flex-col flex-1 overflow-hidden">
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                <div className="container px-6 py-8 mx-auto">
                  <h3 className="text-3xl font-medium text-gray-700">
                    Dashboard
                  </h3>

                  {child}
                </div>
              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
