export function isObject(object) {
  if (typeof object === "object") {
    return true;
  } else {
    return false;
  }
}

export function isOnline() {
  if (navigator.onLine) {
    return true;
  } else {
    return false;
  }
}
