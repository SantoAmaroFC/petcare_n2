import { useState } from "react";
import type { FormEvent } from "react";
import { MdOutlinePets } from "react-icons/md";
import { useRegister } from "../hooks/use-register";
import { useLogin } from "../../auth/hooks/use-login";
import { useRole } from "../../role/hooks/use-role";

export default function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id_cargo, setId_cargo] = useState("");

  const { mutate: register, isPending, error } = useRegister();

  const { mutate: login } = useLogin();

  const { data: role } = useRole();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    register(
      { nome, email, senha, id_cargo },
      { onSuccess: () => login({ email, senha }) }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center gap-2">
        <MdOutlinePets size={24} color="text-green-light" />
        <h2 className="text-[20px] font-black text-green">pet</h2>
        <h2 className="text-[20px] font-black text-orange-primary">care</h2>
      </div>

      <div className="text-center mt-10">
        <p className="text-green text-3xl font-bold mb-4">Cadastre-se</p>
        <p className="text-gray-dark mb-10">E tenha acesso aos serviços</p>
      </div>

      <form onSubmit={handleSubmit} className="w-100 flex flex-col gap-4">
        <div className="flex-1">
          <p className="text-green mb-1 font-medium text-sm">Nome</p>
          <input
            type="text"
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome"
            className="bg-primary border-b border-gray-light pb-3 w-full text-sm font-medium"
          />
        </div>

        <div className="flex-1">
          <p className="text-green mb-1 font-medium text-sm">E-mail</p>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="voce@email.com"
            className="bg-primary border-b border-gray-light pb-3 w-full text-sm font-medium"
          />
        </div>

        <div className="flex-1">
          <p className="text-green mb-1 font-medium text-sm">Senha</p>
          <input
            type="password"
            required
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            placeholder="Sua senha"
            className="bg-primary border-b border-gray-light pb-3 w-full text-sm font-medium"
          />
        </div>

        <div className="flex-1">
          <p className="text-green mb-1 font-medium text-sm">Cargo</p>
          <select
            value={id_cargo}
            onChange={(event) => setId_cargo(event.target.value)}
            required
          >
            <option value="" disabled>
              Selecione a role
            </option>
            {role?.map((cargo) => (
              <option key={cargo.id} value={cargo.id}>
                {cargo.nome}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <p className="text-orange-primary text-sm font-medium">
            E-mail ou senha invalidos.
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="bg-green-dark mt-10 text-white cursor-pointer shadow-brand transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(21,50,41,0.22)] font-semibold rounded-full py-3 w-full disabled:opacity-60"
        >
          {isPending ? "Entrando..." : "Cadastre-se"}
        </button>
      </form>

      <div className="flex items-center gap-1 mt-6 text-sm">
        <p className="text-gray-dark">Já tem conta?</p>
        <a href="/login" className="text-green underline font-medium">
          Então faça o login
        </a>
      </div>
    </div>
  );
}
