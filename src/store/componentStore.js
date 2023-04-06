import { defineStore } from "pinia";
import { ref } from "vue";

export const useComponentStore = defineStore("component", () => {
  const isShowNotification = ref(false);
  const notification = ref("");

  return { isShowNotification, notification };
});
