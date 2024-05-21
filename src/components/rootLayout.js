import { Inter } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Findpoint - Expertos en Distribución de Alimentos",
//   description:
//     "En Findpoint entendemos la importancia de una distribución de alimentos eficiente y efectiva para el éxito de tu negocio en el sector alimenticio. Nuestros expertos están aquí para ayudarte a optimizar tus recursos y alcanzar tus metas de distribución.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
