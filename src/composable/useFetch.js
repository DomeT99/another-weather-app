import { useDefineError } from "./useDefineError";

export const useFetch = async (parameters) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": parameters.key,
      "X-RapidAPI-Host": parameters.host,
    },
  };
  
  const response = await fetch(parameters.url, options);

  if (!response.ok) {
    useDefineError(err);
    return;
  }

  return response.json();
};
