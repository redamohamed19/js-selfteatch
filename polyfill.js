function polyfill(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else if (
    (1 / a === Infinity && 1 / b === -Infinity) ||
    (1 / a === -Infinity && 1 / b === +Infinity)
  ) {
    return false;
  } else if (a === b) {
    return true;
  } else return false;
}
