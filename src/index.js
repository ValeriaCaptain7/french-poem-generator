
function displayPoem(response) {

    console.log("Poem generated");
    new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
});
}

function generatePoem(event) {
event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
let apiKey = "49ecec9d222e3fb8o4502323fetf4ac1";
let context = "You are a romantic poem expert, and love to write short poems. Your mission is to generate a 4 lines poem, in basic HTML. Separate every verse with <br />. Be sure to follow the user instructions.";
let prompt = `User instructions: Generate a romantic French poem about ${instructionsInput.value}`;
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log('Context: ${context}');
axios.get(apiURL).then(displayPoem);
}


let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
