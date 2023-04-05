import router from "../router/index";

function useDefineError(error) {
  router.push("/error");
  throw error;
}

export { useDefineError };
