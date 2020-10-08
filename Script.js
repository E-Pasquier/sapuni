// Menu burger 

function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("navMenu").classList.toggle("change");
  }

// Pop-Up mail 
const messageForm = document.getElementById("messageForm");
const name = document.getElementById(`name`);
messageForm.addEventListener("click",function(){
  alert(`Merci ${name.value}, que la force de Géo Pinchat soit avec toi, et la beauté de Tomme te comble (mais il est à moi) (je suis Marion) (Tomme si tu passes par là... <3)`);
});

// Like button 

  var likeButton = document.getElementById("likeButton");
  function onClickLike() {
    if (likeButton.classList.contains("far")){
      likeButton.classList.remove("far");
      likeButton.classList.add("fas");
    }
    else{
      likeButton.classList.remove("fas");
      likeButton.classList.add("far");
    }
  }

  var likeButton2 = document.getElementById("liikeButton");
  function onClickLike2() {
    if (likeButton2.classList.contains("far")){
      likeButton2.classList.remove("far");
      likeButton2.classList.add("fas");
    }
    else{
      likeButton2.classList.remove("fas");
      likeButton2.classList.add("far");
    }
  }

  var likeButton3 = document.getElementById("liiikeButton");
  function onClickLike3() {
    if (likeButton3.classList.contains("far")){
      likeButton3.classList.remove("far");
      likeButton3.classList.add("fas");
    }
    else{
      likeButton3.classList.remove("fas");
      likeButton3.classList.add("far");
    }
  }
