import { CiCalendar, CiChat1, CiHeart } from "react-icons/ci";
import Cards from "../../components/Cards";
import { MdOutlineVaccines, MdWatchLater } from "react-icons/md";
import { RiTvLine } from "react-icons/ri";

export default function Ficture () {
    return(
        <div className="flex flex-col items-center justify-center py-20 ">
            <div className="flex items-center gap-2 bg-[#DCEFE4] p-2.5 rounded-full">
                <p className="text-[#153229] text-sm font-bold">Funcionalidades</p>
            </div>

            
                <h1 className="mt-6 text-3xl max-w-130 text-center text-[#000000]">Tudo que o seu pet precisa, num só lugar</h1>

            <p className="mt-6 max-w-150 text-center">Da vacina ao passeio, o PetCare acompanhe cada etapa do cuidado - pra você nunca perder nada de vista.</p>

        <div className=" grid  grid-cols-3 mt-14 gap-10 font-bold   ">
            
            <Cards
            title="Agendamento de consultas"
            description="Marque horários com clínicas parceiras em poucos toques e receba lembretes automáticos"
            icon={<CiCalendar size={32} color="#DCEFE4" />}
            backgroundColor="bg-[#3F9271]"
            />

            <Cards
            title="Carteira de vacinação"
            description="Histórico completo de vacinas e vermífugos,
com alerta antes de cada dose vencer."
            icon={<MdOutlineVaccines size={32} color="#9b0a11ff"  />}
            backgroundColor="bg-[#FF6B4A]"
           />

            <Cards
            title="Histórico de saúde"
            description="Peso, exames e diagnósticos organizados
                            por pet, prontos pra mostrar ao veterinário."
            icon={<CiHeart size={32} color="" />}
            backgroundColor="bg-[#F5B942]"
            />

            <Cards
            title="Chat com veterinários"
            description="Tire dúvidas rápidas por mensagem, sem
                            precisar sair de casa nem esperar em fila."
            icon={<CiChat1 size={32} color="#153229" />}
            backgroundColor="bg-[#3F9271]"
            />

            <Cards
            title="Lembretes inteligentes"
            description="Notificações de banho, remédio e retorno,
                            ajustadas à rotina de cada pet."
            icon={<MdWatchLater size={32} color="#153229" />}
            backgroundColor="bg-[#FF6B4A]"
            />

            <Cards
            title="Loja de produtos"
            description="Ração, medicamentos e acessórios
                        recomendados, com entrega direto na sua
                        casa."
            icon={<RiTvLine size={32} color="#153229" />}
            backgroundColor="bg-[#F5B942]"
            />




            
        </div>

        </div>

    );
}