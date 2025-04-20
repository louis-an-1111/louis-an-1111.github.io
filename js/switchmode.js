const toggleBtn = document.getElementById("toggleTheme");
const themeLink = document.getElementById("themeStylesheet");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const isLightMode = themeLink.getAttribute("href") === "css/light-mode.css";

  // Toggle stylesheet
  themeLink.setAttribute("href", isLightMode ? "css/dark-mode.css" : "css/light-mode.css");

  // Toggle icon
  toggleBtn.innerHTML = `<i class="fa${isLightMode ? ' ' : 'r'} fa-lightbulb fa-lg" style="color: ${isLightMode ? 'white' : 'black'};"></i>`;

});