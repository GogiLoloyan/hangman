const PROGRAMING_LANG = [
  "python",
  "javascript",
  "mongodb",
  "json",
  "java",
  "html",
  "css",
  "c",
  "go",
  "csharp",
  "golang",
  "kotlin",
  "php",
  "sql",
  "ruby"
];

const randomWord = () =>
  PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];

export default randomWord;
