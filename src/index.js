function generateAffirmation(event) {
  event.preventDefault();

  const affirmation = document.getElementById("affirmation-input").value;

  new Typewriter("#display-affirmation", {
    strings: [affirmation],
    autoStart: true,
    delay: 100,
    cursor: "|",
  });
}

let affirmationFormElement = document.getElementById("affirmation-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);
