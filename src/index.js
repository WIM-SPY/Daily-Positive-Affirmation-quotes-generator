document
  .querySelector("#affirmation-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let affirmationInput = document.querySelector("#affirmation-input").value;

    let apiKey = "o523c31a2f220c8ate5394b887be36b3";
    let context =
      "You are an affirmation expert and can generate daily positive affirmations.";
    let prompt = `Generate a positive affirmation related to ${affirmationInput}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
      prompt
    )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    let displayArea = document.querySelector("#display-affirmation");
    displayArea.innerHTML = "⏳ Generating your positive affirmation...";

    axios
      .get(apiURL)
      .then((response) => {
        let affirmationText = response.data.answer;
        console.log(response.data);
        new Typewriter("#display-affirmation", {
          strings: [affirmationText],
          autoStart: true,
          delay: 100,
          cursor: "|",
        });
      })
      .catch((error) => {
        displayArea.innerHTML = "Oops! Something went wrong. Please try again.";
        console.error("Error fetching affirmation:", error);
      });
  });
