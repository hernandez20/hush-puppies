import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
export default function SocialBanner() {

    return(
        <>
           <div className="bg-isabelline font-georgia text-center bg-issabelline h-80 flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide">
          @HUSHPUPPIESCO
        </h2>
        <div className="w-60 mx-auto my-1 border-b-2 border-gray-400" />
        <div className="flex justify-center gap-4 mt-2 text-2xl">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><RiInstagramFill /></a>
        </div>
      </div>
        </>
    )
}