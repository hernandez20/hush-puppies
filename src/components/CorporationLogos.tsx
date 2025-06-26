import rise_logo from '@/assets/img/rise.png';
import vtex_logo from '@/assets/img/vtex.png';
import pci_logo from '@/assets/img/pci.png';
import digi_logo from '@/assets/img/digicert.png';
import efecty_logo from '@/assets/img/efecty.jpg';
import visa_logo from '@/assets/img/visa.png';
import mastercard_logo from '@/assets/img/mastercard.png';
import dinners_logo from '@/assets/img/dinners.svg';

export default function CorporationLogos() {

  return (
   
      <div className="border-t py-6 px-4 sm:px-10 text-xs text-gray-500 font-bold  flex flex-wrap justify-center gap-x-10 gap-y-4 text-center">
          
          <div className="min-w-[120px]">
            <p className="mb-1">Desarrollado por:</p>
            <img src={rise_logo} className="mx-auto h-6" alt="Rise Logo" />
          </div>

          <div className="min-w-[120px]">
            <p className="mb-1">Tecnología:</p>
            <img src={vtex_logo} className="mx-auto h-6" alt="VTEX Logo" />
          </div>

          <div className="min-w-[140px]">
            <p className="mb-1">Certificado por:</p>
            <div className="flex justify-center gap-2">
              <img src={pci_logo} className="h-8" alt="PCI Logo" />
              <img src={digi_logo} className="h-5" alt="DigiCert Logo" />
            </div>
          </div>

          <div className="min-w-[160px]">
            <p className="mb-1">Métodos de pago:</p>
            <div className="flex justify-center flex-wrap gap-2">
              <img src={efecty_logo} className="h-6" alt="Efecty" />
              <img src={visa_logo} className="h-6" alt="Visa" />
              <img src={mastercard_logo} className="h-6" alt="Mastercard" />
              <img src={dinners_logo} className="h-6" alt="Diners Club" />
            </div>
          </div>

        </div>


   
  )
}