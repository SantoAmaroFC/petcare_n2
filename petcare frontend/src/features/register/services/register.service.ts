import { api } from "../../../lib/api";
import type { RegisterCredentials } from "../types/register.types";

export async function register(
  credentials: RegisterCredentials
): Promise<void> {
  const response = await api.post<void>("/funcionario", credentials);

  return response.data;
}
