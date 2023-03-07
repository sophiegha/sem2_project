// Define the riddles and their answers
var riddles =
{
  question: "What is always in front of you but cannot be seen?",
  answers: ["Your face", "Your future", "The stars", "Your past"],
  correct: 1

}



function displayMessage() {

  var answerInput = document.getElementById("answer");


  var answer = nameInput.value;


  var messageElement = document.getElementById("message");


  messageElement.textContent = "Hello, " + answer + "!";
  return answerInput
}


}
