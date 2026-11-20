export interface Estoque {
  id: string;
  data: string;
  id_animal: string;
  id_medico: string;
  id_servico: string;
}

export interface CriarEstoque {
  data: string;
  id_animal: string;
  id_medico: string;
  id_servico: string;
}
