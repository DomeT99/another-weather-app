import router from "../router/index";

export function useDefineError(error) {
    router.push("/error")
    throw error;
}
