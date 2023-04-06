function isObject(object) {
  if (typeof object === "object") {
    return true;
  }
}

function isOffline() {
  if (!navigator.onLine) {
    return;
  }
}

function isEmpty(text) {
  return text === "";
}

export { isObject, isOffline, isEmpty };
