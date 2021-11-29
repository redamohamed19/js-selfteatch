function isValidName(name) {
  if (typeof name == 'string' && name != '' && name.split(' ').length == 0) {
    return true;
  } else return false;
}
function hourAttended(attended, length) {
  if (
    typeof attended == 'string' ||
    (typeof attended == 'number' && typeof length == 'string') ||
    (typeof length == 'number' &&
      Number(attended) > 0 &&
      Number(length) > 0 &&
      Number(attended) > Number(length))
  ) {
    return true;
  }
  return false;
}
