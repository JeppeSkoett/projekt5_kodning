//js til loading bar på index.html - mathias
function update() {
  let elem = document.getElementById("progress");
  let width = 0;
  let id = setInterval(frame, 20);
  function frame() {
    if (width == 100) {
      clearInterval(id);
      location.replace("city.html");
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
  }
}

//js til bankpage - Jeppe
let acc = document.getElementsByClassName("buy");
                let i;

                for(i=0; i < acc.length; i++){
                    acc[i].addEventListener("click", function(){
                       /* Toggle between adding and removing the active class, to highlight the button that controls the panel */
                        this.classList.toggle("active");

                        /* Toggle between hiding and showing the active panel */
                        let panel = this.nextElementSibling;
                        if (panel.style.display === "block"){
                          panel.style.display = "none";
                        } else{
                            panel.style.display = "block"
                        }
                    });
                }

//js til add friends - Andreas
function myFunction() {
  var txt;
  var person = prompt("Please enter name:",);
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}
