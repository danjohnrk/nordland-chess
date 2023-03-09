export function translateResult(result: string) {
  if (result === "white") {
    return "Hvit";
  }

  if (result === "black") {
    return "Sort";
  }

  if (result === "remis") {
    return "Remi";
  }

  return result;
}
