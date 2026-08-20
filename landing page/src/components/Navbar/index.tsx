import { GrSchedule } from "react-icons/gr";
import { MdOutlinePets } from "react-icons/md"

export default function Navbar() {
    return(

        <header className="px-5 md:px-20 py-6 flex items-center justify-between border-b border-b-[#ccc]">
            <div className="flex gap-2">
                <MdOutlinePets size={24} color="#3F9271" />
            <p className="font-black text-[#153229]">pet</p>
            <p className="font-black text-[#FF6B4A]">care</p>
            </div>

            <nav>
            <ul className="flex items-center gap-5 md:gap-10">
                <li>
                    <a href="" className="text-xs md:text-base text-[#1F4136]">Inicio</a>
                </li>
                <li>
                    <a href="" className="text-xs md:text-base text-[#1F4136]">Funcionalidades</a>
                </li>
                <li>
                    <a href="" className="text-xs md:text-base text-[#1F4136]">Contatato</a>
                </li>
            </ul>
            </nav>

            <a href="" className="hidden md:block bg-[#153229] text-white font-medium text-sm px-6 py-2.5 rounded-full shadow-2xl">Agendar consulta</a>

        <div className="block md:hidden bg-[#153229] p2 rounded-full">
            <a>
                <GrSchedule color="#fff" size={14} />
            </a>
        </div>
        </header> 
    );
}