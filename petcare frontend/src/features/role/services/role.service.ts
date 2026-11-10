import { api } from "../../../lib/api";
import type { CargoCredentials } from "../types/role.types";

export async function role(): Promise<CargoCredentials[]> {
  const response = await api.get<CargoCredentials[]>("/cargo_func");

  return response.data;
}
