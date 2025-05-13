
const darkModeButton = document.getElementById("darkMode");

// Überprüfe, ob der Dark Mode schon aktiviert wurde
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  darkModeButton.classList.add("dark-mode");
}

// Event-Listener 
darkModeButton.addEventListener("click", function() {

  // Umschalten
document.body.classList.toggle("dark-mode");
darkModeButton.classList.toggle("dark-mode");

  // Speichern
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
});

  