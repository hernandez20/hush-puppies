
import { IoIosArrowForward } from "react-icons/io";
import InputField from './InputField';

import SocialBanner from "./SocialBanner";
import CorporationLogos from "./CorporationLogos";


export default function Footer() {
  return (
    <footer className=" text-gray-800 text-sm pt-6">
      
      <SocialBanner />

      <div className="flex flex-col md:flex-row justify-center text-left gap-8 px-6 sm:px-10 md:px-20 py-6 ">
        <div>
          <h3 className="font-semibold mb-2 font-georgia">SERVICIO AL CLIENTE</h3>
          <ul className="space-y-1">
            <li><a href="#">CONTÁCTENOS</a></li>
            <li><a href="#">CAMBIOS Y DEVOLUCIONES</a></li>
            <li><a href="#">POLÍTICAS DE LA TIENDA</a></li>
            <li><a href="#">POLÍTICAS DE DATOS</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 font-georgia">MI CUENTA</h3>
          <ul className="space-y-1">
            <li><a href="#">MIS PEDIDOS</a></li>
            <li><a href="#">MIS DEVOLUCIONES</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 font-georgia">RECURSOS</h3>
          <ul className="space-y-1">
            <li><a href="#">TIENDAS</a></li>
            <li><a href="#">DEVOLUCIONES</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2 font-georgia">NEWSLETTER</h3>
          <p className="mb-2">Regístrate para ser el primero en recibir nuestras noticias</p>

          <InputField placeholder="E-MAIl" onSubmit={() => console.log("Suscribirse")} icon={<IoIosArrowForward />}
          />
        </div>
      </div>

      <CorporationLogos />
    </footer>


  )
}