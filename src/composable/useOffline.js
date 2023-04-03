import { onMounted } from "vue";
import { isOnline } from "../utils/check";
import router from "../router/index";

export function useOffline() {
  onMounted(() => {
    if (!isOnline()) {
      router.push("/offline");
    } else {
      router.push("/search");
    }
  });
}
