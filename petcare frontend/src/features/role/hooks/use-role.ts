import { useQuery } from "@tanstack/react-query";
import { role } from "../services/role.service";

export function useRole() {
  return useQuery({
    queryKey: ["role"],
    queryFn: role,
  });
}
