const questionElement = document.querySelector(".question")
questionElement.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

let answer = prompt("Jaká je správná odpověď?")

const answerTextElement = document.querySelector(".answer__text")
answerTextElement.textContent = answer

const answerElement = document.querySelector(".answer")

if (answer === "Bell") {
    answerElement.classList.add("answer--correct")
}
else {
    answerElement.classList.add("answer--wrong")
}
