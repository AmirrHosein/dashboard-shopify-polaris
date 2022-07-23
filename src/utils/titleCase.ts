export const titleCase = (string:string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((word:string) => word.replace(word[0], word[0].toUpperCase()))
    .join("");
};
