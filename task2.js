const quizData = [
    {
      question: "1. Which of the following best describes a budget?",
      options: ["(a) A record of past income and expenses.", "(b) A plan for future income and expenses.", "(c) A summary of assets and liabilities.", "(d) A statement of cash flows."],
      answer: "(b) A plan for future income and expenses."
    },
    {
      question: "2. What is the primary goal of investing?",
      options: ["(a) To avoid losing money.", "(b) To generate income or capital appreciation over time.", "(c) To spend money on goods and services.", "(d) To pay off all outstanding debts immediately."],
      answer: "(b) To generate income or capital appreciation over time."
    },
    {
        question: "3. Which of the following is generally considered the least risky type of investment?",
        options: ["(a) Stocks", "(b) Bonds", "(c) Real Estate", "(d) Savings Account"],
        answer: "(d) Savings Account"
    },
    {
        question: "4. What does APR stand for in the context of borrowing money?",
        options: ["(a) Annual Percentage Return", "(b) Adjusted Prime Rate", "(c) Annual Percentage Rate", "(d) Average Payment Ratio"],
        answer: "(c) Annual Percentage Rate"
    },
    {
        question: "5. What is diversification in investing?",
        options: ["(a) Investing all your money in a single asset.", "(b) Spreading your investments across different asset classes.", "(c) Trading stocks frequently to maximize short-term gains.", "(d) Borrowing heavily to invest in more assets."],
        answer: "(b) Spreading your investments across different asset classes."
    },
    {
        question: "6. Which of the following is a key benefit of having insurance?",
        options: ["(a) It guarantees a high return on investment.", "(b) It protects against potential financial losses from unexpected events.", "(c) It helps you accumulate wealth quickly.", "(d) It eliminates the need for emergency savings."],
        answer: "(b) It protects against potential financial losses from unexpected events."
    },
    {
        question: "7. What is the difference between gross pay and net pay?",
        options: ["(a) Gross pay is after taxes and deductions, while net pay is before.", "(b) Gross pay is before taxes and deductions, while net pay is after.", "(c) Gross pay includes only salary, while net pay includes bonuses.", "(d) Gross pay is your monthly pay, while net pay is your annual pay."],
        answer: "(b) Gross pay is before taxes and deductions, while net pay is after."
    },
    {
        question: "8. What is a credit score primarily used for?",
        options: ["(a) To determine your net worth.", "(b) To assess your creditworthiness for loans and other financial products.", "(c) To track your investment performance.", "(d) To calculate your income tax liability."],
        answer: "(b) To assess your creditworthiness for loans and other financial products."
    },
    {
        question: "9. Which of the following is an example of a liability?",
        options: ["(a) A savings account", "(b) A car loan", "(c) A stock portfolio", "(d) A piece of real estate"],
        answer: "(b) A car loan"
    },
    {
        question: "10. What is compound interest?",
        options: ["(a) Interest calculated only on the principal amount.", "(b) A simple fee charged by banks.", "(c) Interest calculated on the principal amount and any accumulated interest.", "(d) Interest that decreases over time."],
        answer: "(c) Interest calculated on the principal amount and any accumulated interest."
    },  
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();