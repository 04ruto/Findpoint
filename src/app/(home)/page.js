import Button from "@/components/button";

export default function Home() {
  return (
    <main className="">
      {/* IMATGE */}
      <div className="h-screen overflow-hidden relative before:block before:absolute before:bg-black before:h-full before:top-0 before:left-0 before:z-10 before:opacity-30">
        <img
          src="https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute top-0 left-0 min-h-full ob w-[100vw]"
          alt=""
        />
        <div className="relative z-20 max-w-screen mx-auto grid grid-cols-12 h-full items-center backdrop-blur-sm pl-20">
          <div className="col-span-8">
            <span className="uppercase text-black text-xs font-bold mb-2 block ">
              NUESTRA PASIÓN ES LA CALIDAD
            </span>
            <h1 className="text-[#f8f9fa] drop-shadow-md font-extrabold text-5xl mb-8">
              <span className="text-[#061a40] drop-shadow-[0_0px_10px_rgba(255,255,255,1)]">
                Findpoint
              </span>{" "}
              Expertos en Distribución de Alimentos
            </h1>
            <p className="text-[#f8f9fa] text-base">
              En Findpoint entendemos la importancia de una distribución de
              alimentos eficiente y efectiva para el éxito de tu negocio en el
              sector alimenticio. Nuestros expertos están aquí para ayudarte a
              optimizar tus recursos y alcanzar tus metas de distribución.
            </p>
            <button className="mt-8 py-2 text-white uppercase text-base font-light px-10 border-2 border-black rounded bg-black bg-opacity-30 hover:bg-black hover:bg-opacity-70 transition duration-500">
              Comenzar
            </button>
          </div>
        </div>
      </div>

      {/* MISSATGE SOTA IMATGE */}
      <div className="bg-[#edf2fb] py-10">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-black text-3xl mb-4">
              Conectando con el Mundo
            </h2>
            <p className="text-base text-black">
              Nuestra experiencia en la distribución de alimentos nos ha
              permitido expandirnos y brindar nuestros servicios en más de 90
              países alrededor del mundo. Estamos comprometidos a proporcionar
              soluciones adaptadas a las necesidades específicas de cada
              cliente, sin importar su ubicación.
            </p>
          </div>
          <Button text="Comenzar" />
          {/* <button className="text-black uppercase py-2 text-base px-10 border-2 border-black rounded hover:bg-white transition duration-500">
            Comenzar
          </button> */}
        </div>
      </div>

      {/* SECCIÓ 1 */}
      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-black w-full font-bold text-2xl max text-right mb-12 mt-10">
              Asistencia Personalizada
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="py-20 bg-[#abc4ff] relative before:absolute before:h-full before:w-screen before:bg-[#abc4ff] before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#FFFFFF] font-black text-4xl leading-snug mb-10">
                Te ayudamos a Crecer
              </h2>
              <p className="text-white text-sm">
                En Findpoint, entendemos los desafíos únicos que enfrenta el
                sector alimenticio. Nuestros expertos están disponibles para
                brindarte la asesoría necesaria para superar obstáculos y
                alcanzar el éxito en tu negocio. ¡Habla con uno de nuestros
                expertos hoy mismo!
              </p>
              <a href="/contact" className="mt-8">
                <Button text="Habla con un experto" extraClasses={"mt-8"} />

                {/* <button className="mt-8 text-black uppercase py-2 text-sm px-10 border-2 border-black rounded hover:bg-white transition duration-500">
                  Habla con un experto
                </button> */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓ 2 */}
      <div className="py-4 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="py-20 bg-[#061a40] relative before:absolute before:h-full before:w-screen before:bg-[#061a40] before:top-0 before:right-0">
            <div className="relative z-20">
              <h2 className="text-[#FFFFFF] font-black text-4xl leading-snug mb-10">
                Explorando Nuevos Horizontes
              </h2>
              <p className="text-white text-sm text-justify pr-10">
                En Findpoint, estamos comprometidos a ayudar a los emprendedores
                del sector alimenticio a descubrir nuevas oportunidades de
                crecimiento y expansión. Nuestro equipo de expertos está listo
                para brindarte el apoyo necesario para llevar tu negocio al
                siguiente nivel. ¡Contáctanos hoy mismo para empezar!
              </p>

              {/* <Button
                text="Contacta con nosotros"
                extraClasses={"mt-8 border-white hover:bg-black "}
              /> */}

              <button className="mt-8 text-white uppercase py-2 text-sm px-10 border-2 border-white rounded hover:bg-black hover:bg-opacity-80 transition duration-500">
                Contacta con nosotros
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col pl-16">
            <h2 className="text-black font-bold text-2xl text-left mb-10 mt-10">
              Servicios Adaptados a tus Necesidades
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1661577804141-6f0180f82373?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓ 3 */}
      <div className="py-12 relative overflow-hidden bg-white">
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto">
          <div className="w-full flex flex-col items-end pr-16">
            <h2 className="text-black font-bold text-2xl text-right mb-12 mt-10">
              Transforma tu Negocio Hoy
            </h2>
            <div className="h-full mt-auto overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="h-full w-full object-contain"
                alt=""
              />
            </div>
          </div>
          <div className="py-20 bg-[#abc4ff] relative before:absolute before:h-full before:w-screen before:bg-[#abc4ff] before:top-0 before:left-0">
            <div className="relative z-20 pl-12">
              <h2 className="text-[#FFFFFF] font-black text-4xl leading-snug mb-10">
                Innovación y Crecimiento
              </h2>
              <p className="text-white text-sm">
                En Findpoint, entendemos que el sector alimenticio está en
                constante evolución. Estamos aquí para ayudarte a adaptarte a
                los cambios del mercado y transformar tu negocio para alcanzar
                el éxito. Nuestros expertos te guiarán en el camino hacia la
                innovación y el crecimiento. ¡Comienza tu transformación hoy
                mismo!
              </p>

              <Button text="Descubre cómo" extraClasses={"mt-8"} />
              {/* <button className="mt-8 text-black uppercase py-2 text-sm px-10 border-2 border-black rounded hover:bg-white transition duration-500">
                Descubre cómo
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
