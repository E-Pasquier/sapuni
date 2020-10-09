function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("navMenu").classList.toggle("change");
}

/*const submitButton = document.querySelector(`#submit-button`);
const list = document.querySelector(`li`)
const addComment = () => {
  const msg = document.querySelector(`#message`).value;
  const text = document.createElement("li");
  text.innerHTML = msg.appenChild(text);
  msg.value = "";
}
const selectUl = document.querySelector(`#addComment`);
submitButton.addEventListener("click", addComment){
  const msg = document.querySelector(`#message`).value;
  const text = document.createElement("li");
  text.innerHTML = msg;
};*/

const commentList = document.getElementById("comment-list");
const nameElement = document.getElementById("name-input");
const buttonElement = document.getElementById("submit-button2");
const messageElement = document.getElementById("message2");

buttonElement.addEventListener("click", function () {
  const newComment = document.createElement("li");
  newComment.innerHTML = ` ${nameElement.value} a commenté : ${messageElement.value}`;
  commentList.appendChild(newComment);
})
