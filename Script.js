// Menu burger 

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

// Like button 

  const likeButton = document.getElementById("likeButton");
  likeButton.addEventListener("click", function(){
    if (likeButton.classList.contains("far")){
      likeButton.classList.remove("far");
      likeButton.classList.add("fas");
    }
    else{
      likeButton.classList.remove("fas");
      likeButton.classList.add("far");
    }
  });

  const likeButton2 = document.getElementById("liikeButton");
  likeButton2.addEventListener("click", function(){
    if (likeButton2.classList.contains("far")){
      likeButton2.classList.remove("far");
      likeButton2.classList.add("fas");
    }
    else{
      likeButton2.classList.remove("fas");
      likeButton2.classList.add("far");
    }
  });

  const likeButton3 = document.getElementById("liiikeButton");
  likeButton3.addEventListener("click", function(){
    if (likeButton3.classList.contains("far")){
      likeButton3.classList.remove("far");
      likeButton3.classList.add("fas");
    }
    else{
      likeButton3.classList.remove("fas");
      likeButton3.classList.add("far");
    }
  });
 
