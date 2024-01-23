import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { API_URL, TOKEN_KEY } from "src/constants";

type Response = {
  token: string;
};

async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{ token: string }> {
  const response = await fetch(`${API_URL}/api/token-auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();

  return result;
}

export function useSignIn() {
  const { enqueueSnackbar } = useSnackbar();

  const { mutate: signIn } = useMutation<
    Response,
    unknown,
    { username: string; password: string },
    unknown
  >({
    mutationFn: login,
    onSuccess(data: Response) {
      localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token));
      window.location.replace("/");
    },
    onError() {
      enqueueSnackbar("Ops.. Error on sign in. Try again!", {
        variant: "error",
      });
    },
  });
  return signIn;
}
