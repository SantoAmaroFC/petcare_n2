import { MdOutlinePets, MdOutlineStar } from "react-icons/md";

export default function Hero() {
    return(

        <div className="flex flex-col items-center justify-center flex gap-y-5 mt-10   ">
           <div className="flex  bg-[#DCEFE4] px-6 py-2.5 rounded-full shadow-2xl  "> 
            <MdOutlinePets />
            <p className=" text-black font-medium text-sm "> Feito para tutores atentos</p>

            </div>
            
            <div className="flex flex-col text-center">
            <h1 className="font-black text-4xl ">
                toda a rotina do seu pet, 
            </h1>
            <h1 className="font-black text-[#FF6B4A] text-4xl">numa coleira só.</h1>
           </div>

            <div className="flex flex-col text-center ">
            <p>
                 agende consultas, acompanhe vacinas e fale com veterinarios
            </p>
            <p>
                 sem sair do app. O PetCare organiza oque seu pet precisa,
            </p>
            <p>
                antes de voce precisar lembrar
            </p>
            </div>

            <div >
            <ul className="flex  gap-5 px-6 py-2.5  ">
                <li className="bg-[#FF6B4A] px-6 py-2.5 rounded-full shadow-2xl">
                    <a href="">Ver Funcionalidades</a>
                </li>
                <li className="bg-white px-6 py-2.5 rounded-full shadow-2xl">
                    <a href="">Falar com veterinario</a>
                </li>
            </ul>
            </div>
            <div className="flex gap-5">
            <div className="flex-col ">
                <p className="text-black">12mil+</p>
                <p className="text-black">pets cadastrados</p>
            </div>
            <div className=" flex-col">

                <p className="flex text-black">4,9 <MdOutlineStar /></p> 
                <p className="text-black">avaliação media</p>
            </div>
            <div className="flex-col">
                <p className="text-black">24/7</p>
                <p className="text-black">suporte via chat</p>
             </div>
             </div>

        </div>
        

    );
}