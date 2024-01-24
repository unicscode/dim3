import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useLocalStorage } from "components/hooks";
import { useState } from "react";
import { API_URL, TOKEN_KEY } from "src/constants";

async function getPatientList(token: string, page = 0) {
  const response = await fetch(
    `${API_URL}/api/patient-list?page=${page}&pageSize=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const result = await response.json();

  return result;
}

export function usePatientList() {
  const [token] = useLocalStorage(TOKEN_KEY, null);
  const [page] = useState(0);

  const query = useQuery({
    queryKey: ["patientList", page],
    queryFn: () => getPatientList(token, page),
    placeholderData: keepPreviousData,
  });

  return query;
}
