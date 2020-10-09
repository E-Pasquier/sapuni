// Menu burger 

function onClickMenu() {

  document.getElementById("menu").classList.toggle("change");
  document.getElementById("navMenu").classList.toggle("change");
}

// Carroussel 

var indexValue = 0;
      function slideShow(){
        setTimeout(slideShow, 2500);
        var x;
        const img = document.querySelectorAll(".imgBanner");
        for(x = 0; x < img.length; x++){
          img[x].style.display = "none";
        }
        indexValue++;
        if(indexValue > img.length){indexValue = 1}
        img[indexValue -1].style.display = "block";
      }
      slideShow();
      
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
 
