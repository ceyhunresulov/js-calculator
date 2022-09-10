const buttons = document.querySelectorAll("button");
const calcBox = document.getElementById("calc");
const history = document.querySelector(".history");
let firstNum = null;
let secondNum = null;
let operator = null;
buttons.forEach((button) =>
  button.addEventListener("click", (e) => {
    let button = e.target;
    if (button.classList.contains("clear")) {
      clearCalcBox();
    } else if (button.classList.contains("number")) {
      addNumber(button);
    } else if (button.classList.contains("operator")) {
      addOperator(button);
    } else if (button.classList.contains("equal")) {
      getResult();
    }
  })
);

const clearCalcBox = () => {
  calcBox.value = null;
  history.innerText = "history";
  firstNum = null;
  secondNum = null;
};

const addNumber = (button) => {
  calcBox.value += button.innerText;
};

const addOperator = (button) => {
  if (firstNum === null) {
    firstNum = parseFloat(calcBox.value);
    calcBox.value = "";
    operator = button.innerText;
    history.innerText = firstNum + button.innerText;
  } else {
    secondNum = parseFloat(calcBox.value);
    calcBox.value = "";
    operator = button.innerText;
  }
};

const getResult = () => {
  switch (operator) {
    case "+":
      secondNum = parseFloat(calcBox.value);
      calcBox.value = firstNum + secondNum;
      history.innerText += secondNum + "=" + calcBox.value;
      firstNum = null;
      secondNum = null;
      return;
    case "-":
      secondNum = parseFloat(calcBox.value);
      calcBox.value = firstNum - secondNum;
      history.innerText += secondNum + "=" + calcBox.value;
      firstNum = null;
      secondNum = null;
      return;
    case "x":
      secondNum = parseFloat(calcBox.value);
      calcBox.value = firstNum * secondNum;
      history.innerText += secondNum + "=" + calcBox.value;
      firstNum = null;
      secondNum = null;
      return;
    case "/":
      secondNum = parseFloat(calcBox.value);
      calcBox.value = firstNum / secondNum;
      history.innerText += secondNum + "=" + calcBox.value;
      console.log(8 / 2);
      firstNum = null;
      secondNum = null;
      return;
  }
};
