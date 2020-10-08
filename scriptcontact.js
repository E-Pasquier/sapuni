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