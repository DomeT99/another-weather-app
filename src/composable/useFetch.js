import { useDefineError } from "./useDefineError";

export async function useFetch(parameters) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": parameters.key,
      "X-RapidAPI-Host": parameters.host,
    },
  };
  
  const response = await fetch(parameters.url, options);

  if (!response.ok) {
    useDefineError(response.statusText);
    return;
  }

  return response.json();
}
