const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const theme = localStorage.getItem("theme");

if (theme === "dark") {
  document.documentElement.classList.add("dark");
}

if (!theme && isDarkMode?.matches) {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}
