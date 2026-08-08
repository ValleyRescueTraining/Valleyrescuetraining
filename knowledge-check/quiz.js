(function () {
  "use strict";

  var form = document.querySelector("[data-knowledge-check]");
  if (!form) return;

  var result = document.querySelector("[data-quiz-result]");
  var scoreText = document.querySelector("[data-score-text]");
  var scoreMessage = document.querySelector("[data-score-message]");

  function randomIndex(max) {
    if (window.crypto && window.crypto.getRandomValues) {
      var value = new Uint32Array(1);
      window.crypto.getRandomValues(value);
      return value[0] % max;
    }
    return Math.floor(Math.random() * max);
  }

  function shuffleAnswers(question) {
    var answers = Array.from(question.querySelectorAll("label"));

    for (var index = answers.length - 1; index > 0; index -= 1) {
      var swapIndex = randomIndex(index + 1);
      var answer = answers[index];
      answers[index] = answers[swapIndex];
      answers[swapIndex] = answer;
    }

    var feedback = question.querySelector(".answer-feedback");
    answers.forEach(function (answer) {
      question.insertBefore(answer, feedback);
    });
  }

  Array.from(form.querySelectorAll(".quiz-question")).forEach(shuffleAnswers);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var questions = Array.from(form.querySelectorAll(".quiz-question"));
    var unanswered = questions.find(function (question) {
      return !question.querySelector("input:checked");
    });

    if (unanswered) {
      unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      unanswered.classList.add("needs-answer");
      unanswered.querySelector("input")?.focus();
      return;
    }

    var score = 0;
    questions.forEach(function (question) {
      question.classList.remove("needs-answer");
      var selected = question.querySelector("input:checked");
      var correct = selected && selected.value === question.dataset.correct;
      question.classList.toggle("answered-correctly", correct);
      question.classList.toggle("answered-incorrectly", !correct);
      question.querySelector(".answer-feedback").hidden = false;
      if (correct) score += 1;
    });

    var percent = Math.round(score / questions.length * 100);
    scoreText.textContent = score + " of " + questions.length + " correct (" + percent + "%)";
    scoreMessage.textContent = percent >= 80
      ? "Strong foundation. Hands-on practice is the next step for turning knowledge into confident action."
      : percent >= 60
        ? "You have a useful foundation. Review the explanations below and consider hands-on training to strengthen your response."
        : "This is exactly why training matters. Review each explanation, then join a hands-on course to build confidence and skill.";
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "center" });

    if (window.gtag) {
      window.gtag("event", "knowledge_check_completed", {
        quiz: form.dataset.knowledgeCheck,
        score: score,
        total_questions: questions.length
      });
    }
  });
})();
