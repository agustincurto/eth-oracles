export function parsePriceTuple(value, decimals) {
  // TODO: get a better way to convert
  const divider = "1" + String(0).padStart(decimals, "0");
  return value / divider;
}
