const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.getElementById("greeting");
const savedUsername = localStorage.getItem("USERNAME_KEY");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = localStorage.getItem("username");

// Hello "이름" 출력

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  // submit의 default 기능 제거
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  // 입력값을 local storage에 저장
  const username = loginInput.value;
  localStorage.setItem("username", username);

  paintGreetings(username);
}

// Local Storage에 값이 존재하는 지에 따라
if (USERNAME_KEY === null) {
  // 존재 X >> 입력창 출력
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // 존재 O >> 반기기
  paintGreetings(USERNAME_KEY);
}
