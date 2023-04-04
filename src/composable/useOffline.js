import { onMounted } from "vue";
import { isOffline } from "../utils/check";
import router from "../router/index";

export function useOffline() {
  onMounted(() => {
    if (isOffline()) {
      router.push("/offline");
    } else {
      router.push("/search");
    }
  });
}
