import { FaPlus } from "react-icons/fa"

export default function Contact() {
    return (
        <section className="mx-20 my-40 rounded-3xl bg-white border border-[#ccc]">
            <div className="flex items-center">
                <div className="bg-[#153229] py-10 pl-10 pr-20 rounded-tl-3xl rounded-bl-3xl">
                    <p className="text-white bg-[#ccc] w-30 text-center rounded-full text-xs py-2">
                        Fale com a gente
                    </p>
                    <p className="font-bold text-white text-2x1 max-w-70 my-5">
                        Alguma dúvida sobre o Petcare?
                    </p>
                    <p className="text-[#ccc] max-w-90 mb-10">
                        Preencha o formulário e nosso time entra em contato em até 1 dia
                        útil. Pra emergências, use o chat 24h
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-3">
                        <FaPlus size={14} color="#fff" />
                        <p>contato@petcare.app</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPlus size={14} color="#fff" />
                        <p className="text-white">(48) 99999-0000</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPlus size={14} color="#fff" />
                        <p className="text-white">Florianópolis, SC</p>
                    </div>
                </div>
            </div>
        </section>
    )
}