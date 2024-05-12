export default function Contact() {
  return (
    <main>
      <section className="text-gray-600 body-font relative min-h-screen">
        {/* MAPA */}
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0Badia%20del%20Valles+(Institut%20de%20Badia%20del%20Valles)&ie=UTF8&t=&z=8&iwloc=B&output=embed"
          ></iframe>
        </div>

        {/* FORMULARI CONTACTE */}
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contáctanos
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte.
            </p>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-gray-600">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-black uppercase py-2 text-base font-light px-10 border-2 border-black rounded hover:bg-black hover:bg-opacity-10 transition duration-500">
              Enviar Mensaje
            </button>
            <p className="text-xs text-gray-500 mt-3">
              ¡Estamos ansiosos por saber de ti!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
