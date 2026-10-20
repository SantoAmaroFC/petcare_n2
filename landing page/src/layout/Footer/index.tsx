import { MdOutlinePets } from "react-icons/md";

export default function Footer() {
    return (
        <footer className=" bg-[#153229]  ">
        
            <div className="grid grid-cols-4 justify-items-center items-center" >
                <div className=" flex items-center gap-2">
                     <MdOutlinePets size={24} color="#3F9271" />
                     <p className="font-black text-[#153229]">pet</p>
                     <p className="font-black text-[#FF6B4A]">care</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>

          
          

           

        </footer>
    )
}