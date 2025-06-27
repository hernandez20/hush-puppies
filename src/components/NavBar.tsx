import hush_puppies_logo from '@/assets/img/hush_puppies.jpg'
import { IoIosArrowForward } from "react-icons/io"
import DiscountAnnouncement from "@/components/DiscountAnnouncement"
import InputField from './InputField'
import CartDropdown from "@/components/CartDropdown"

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-300 relative z-50">
      
      <DiscountAnnouncement message="HOT SALE -30% EN SANDALIAS" />

      <div className="bg-gray-300 text-gray-700 font-bold text-[8px] sm:text-xs sm:px-6 py-3 flex flex-row-reverse  gap-4">
        <span className="cursor-pointer">DIRECTORIO DE TIENDAS</span>
        <span className="cursor-pointer">SERVICIO AL CLIENTE</span>
        <span className="cursor-pointer">MI CUENTA</span>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-10 md:px-20 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <img src={hush_puppies_logo} width={100} height={100} alt="Hush Puppies" className="h-20 sm:h-24" />
            <h2 className="font-bold text-3xl text-gray-500">Hush Puppies®</h2>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 w-full sm:w-auto">
            
            <InputField placeholder="BUSCAR" onSubmit={() => console.log("Buscar")} icon={<IoIosArrowForward />} />
            
            <p className="text-xs text-[#6E434F] font-semibold text-center sm:text-right">
              ENVÍO GRATIS PARA PEDIDOS SUPERIORES A $300.000
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 font-georgia text-gray-800 font-semibold">
          <nav className="flex flex-wrap justify-center gap-4">
            <a href="#">HOMBRE</a>
            <a href="#">MUJER</a>
            <a href="#">BLOG</a>
            <a href="#">HISTORIA</a>
            <a href="#">TIENDAS</a>
          </nav>

          <CartDropdown />
          
        </div>
      </div>
    </header>
  )
}
