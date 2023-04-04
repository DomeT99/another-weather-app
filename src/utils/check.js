export function isObject(object) {
  if (typeof object === "object") {
    return true;
  } 
}

export function isOffline() {
  if (!navigator.onLine) {
    return;
  }
}
