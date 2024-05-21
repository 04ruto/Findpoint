import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    // <div>Header</div>
    <header className="border-b-2 border-black">
      <script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        defer
      ></script>
      <div className="">
        <div className="antialiased bg-gray-100">
          <div className="w-full text-gray-700 bg-white">
            <div className="flex flex-row max-w-screen mx-5 items-center">
              <div className="flex flex-row items-center justify-between py-4">
                <Link
                  href="/"
                  className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
                >
                  Findpoint
                </Link>
              </div>
              <nav className="flex-grow pb-0 md:flex justify-end flex-row">
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 transition duration-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/"
                >
                  Inicio
                </Link>
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 transition duration-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/store"
                >
                  Productos
                </Link>
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 transition duration-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/about"
                >
                  Sobre nosotros
                </Link>
                <Link
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 transition duration-500 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="/contact"
                >
                  Contacto
                </Link>
                <div className="flex border-l-2 ml-2">
                  {!session?.user ? (
                    <>
                      <a
                        className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 transition duration-500 hover:text-gray-900 hover:bg-[#edf2fb]"
                        href="/login"
                      >
                        Iniciar
                      </a>
                      <a
                        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 transition duration-500 hover:text-gray-900 hover:bg-[#abc4ff]"
                        href="/signup"
                      >
                        Registrarse
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        className="flex justify-center items-center px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 transition duration-500 hover:text-gray-900 hover:bg-gray-200"
                        href="/cart"
                      >
                        <div className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                          </svg>
                        </div>
                      </Link>
                      {session.user.name.toLowerCase() == "admin" ? (
                        <>
                          <Link
                            className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 transition duration-500 hover:text-gray-900 hover:bg-gray-200"
                            href="/dashboard/client"
                          >
                            Dashboard
                          </Link>
                        </>
                      ) : (
                        <></>
                      )}
                      <a
                        className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 transition duration-500 hover:text-gray-900 hover:bg-red-200"
                        href="/api/auth/signout"
                      >
                        Salir
                      </a>

                      <p className="px-4 py-2 mt-2 text-sm font-semibold border-2 rounded-lg md:mt-0 md:ml-4 transition duration-500">
                        {session.user.name}
                      </p>
                    </>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
