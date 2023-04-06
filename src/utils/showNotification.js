import { useComponentStore } from "../store/componentStore";

function showNotification(message) {
  const store = useComponentStore();

  store.isShowNotification = true;
  store.notification = message;

  setTimeout(() => {
    store.isShowNotification = false;
  }, 2000);
}


export { showNotification };
