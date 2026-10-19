import { MdOutlinePets } from "react-icons/md"

function App() {
 
  return (
    <>
        <div className=" flex flex-col items-center mt-40  ">
            <div className=" flex items-center gap-x-3   ">
              <p><MdOutlinePets /></p>
              <p className= " font-black text-[#182420]">pet  </p>
              <p className="font-black text-[#FF6B4A]">care</p>
            </div>
            <div className="flex items-center flex-col mt-15 ">
              <h1 className=" font-black text-2xl">Entrar na sua conta</h1>
              <p className="  text-sm">Acompanhe a rotina do seu pet.</p>
            </div>
            <div>
              <p className="text-[14px]">E-mail</p>
              <input
              type="text"
              name="voce@email.com" />
            </div>
            <
              div>
              <p className="text-[14px]">Senha</p>
              <input
              type="text"
              name="name" />
            </div>
            <div>
              <button>Entrar</button>
            </div>
            <div className="flex">
              <p>Ainda não tem conta?</p>
              <button>Cadastra seu pet</button>
            </div>


        </div>
    </>
  )
}

export default App
