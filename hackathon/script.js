// script.js

document.addEventListener("DOMContentLoaded", () => {
    const eraSelect = document.getElementById("eraSelect");
    const sections = document.querySelectorAll(".era-section");
    const body = document.body;
  
    // Function to switch era
    function switchEra(eraClass) {
      // Remove any existing era classes on the body
      body.classList.remove("era-90s", "era-2000s", "era-2010s", "era-2020s");
      // Add the selected era class
      body.classList.add(eraClass);
  
      // Hide all sections, then show the active one
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === eraClass) {
          section.classList.add("active");
        }
      });
    }
  
    // On page load, set default era
    switchEra("era-90s");
  
    // On dropdown change, switch era
    eraSelect.addEventListener("change", (e) => {
      switchEra(e.target.value);
    });
  });
  