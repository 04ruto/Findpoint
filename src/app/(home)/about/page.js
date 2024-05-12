import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* SOBRE L'EMPRESA */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 text-gray-600">
          <div className="md:flex md:gap-6 lg:items-center">
            <div className="md:w-1/2 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="md:w-1/2 lg:w-7/12">
              <h2 className="text-3xl lg:text-4xl text-gray-900 font-bold mb-4">
                Acerca de Findpoint
              </h2>
              <p className="text-sm leading-relaxed mb-4">
                En Findpoint, estamos comprometidos con la excelencia en la
                distribución de alimentos. Nuestro equipo de expertos se
                esfuerza por garantizar que los productos lleguen a su destino
                de manera oportuna y segura, cumpliendo con los más altos
                estándares de calidad.
              </p>
              <p className="text-sm leading-relaxed mb-4">
                Nos enorgullece ofrecer soluciones personalizadas para las
                necesidades únicas de cada cliente. Con un enfoque en la
                innovación y la eficiencia, estamos constantemente buscando
                formas de mejorar nuestros servicios y satisfacer las demandas
                cambiantes del mercado.
              </p>
              <p className="text-sm leading-relaxed mb-4">
                En Findpoint, no solo distribuimos alimentos, también
                construimos relaciones duraderas con nuestros clientes, basadas
                en la confianza y la colaboración mutua. Estamos comprometidos a
                ser su socio confiable en la distribución de alimentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      {/* EQUIP */}
      <div className="flex items-center justify-center bg-white border-t-2 py-12">
        <div className="container max-w-7xl px-4">
          <div className="flex flex-wrap justify-center text-center mb-5">
            <div className="w-full lg:w-6/12">
              <h1 className="text-gray-900 text-4xl font-bold">
                Nuestro Equipo
              </h1>
              <p className="text-gray-700 text-lg font-light">
                Con más de 100 años de experiencia combinada, contamos con un
                equipo bien capacitado al frente.
              </p>
            </div>
          </div>

          {/* MEMBRE 1 */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80"
                    alt="Tranter Jaskulski"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className="text-gray-900 text-xl font-bold mb-1">
                    Lucía Molinari
                  </h1>
                  <div className="text-sm text-gray-700 font-light mb-2">
                    Gerente de Operaciones Logísticas
                  </div>
                  <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                    >
                      <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                    >
                      <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                    >
                      <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MEMBRE 2 */}
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80"
                    alt="Team Member"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className="text-gray-900 text-xl font-bold mb-1">
                    Carolina López
                  </h1>
                  <div className="text-sm text-gray-700 font-light mb-2">
                    Coordinadora de Cadena de Suministro
                  </div>
                  <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                    >
                      <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                    >
                      <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                    >
                      <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MEMBRE 3 */}
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80"
                    alt="Team Member"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className="text-gray-900 text-xl font-bold mb-1">
                    Ana Martínez
                  </h1>
                  <div className="text-sm text-gray-700 font-light mb-2">
                    Analista de Compras y Abastecimiento
                  </div>
                  <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                    >
                      <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                    >
                      <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                    >
                      <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* MEMBRE 4 */}
            <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
              <div className="flex flex-col">
                <a href="#" className="mx-auto">
                  <img
                    className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                    src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?fit=clamp&w=400&h=400&q=80"
                    alt="Team Member"
                  />
                </a>

                <div className="text-center mt-6">
                  <h1 className="text-gray-900 text-xl font-bold mb-1">
                    Diego Vargas
                  </h1>
                  <div className="text-sm text-gray-700 font-light mb-2">
                    Especialista en Control de Calidad Alimentaria
                  </div>
                  <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                    >
                      <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                    >
                      <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                    </a>
                    <a
                      href="#"
                      className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                    >
                      <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
