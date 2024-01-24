import { useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "components/hooks";
import { useParams } from "react-router-dom";
import { API_URL, TOKEN_KEY } from "src/constants";

async function getPatienDetails(token: string, id: string) {
  const response = await fetch(`${API_URL}/api/patients/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();

  return result;
}

export function usePatientDetails() {
  const [token] = useLocalStorage(TOKEN_KEY, null);
  const { id } = useParams();
  const query = useQuery({
    queryKey: ["patientDetails", id],
    queryFn: () => getPatienDetails(token, id as string),
  });
  return query;
}
