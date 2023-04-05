import { useDefineError } from "./useDefineError";

async function useFetch(parameters) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": parameters.key,
      "X-RapidAPI-Host": parameters.host,
    },
  };

  const response = await fetch(parameters.url, options);

  if (!isFine(response)) {
    useDefineError(response.statusText);
    return;
  }

  return response.json();
}

function isFine(response) {
  return response.ok;
}

export { useFetch };
