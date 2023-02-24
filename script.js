//variables
const question = document.getElementsByClassName("question-wrapper_question");
const answer = document.getElementsByClassName("answer");

//Click the question to reveal the answer
for (let i = 0; i < question.length + 1; i++) {
  console.log(question[i]);

  question[i].addEventListener("click", function () {
    answer[i].classList.toggle("show");
    question[i].classList.toggle("active");
  });
}
