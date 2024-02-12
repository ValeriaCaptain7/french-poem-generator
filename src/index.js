function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La tombe dit à la rose",
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
