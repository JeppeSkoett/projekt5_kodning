//js til loading bar på index.html - mathias
function update() {
  let elem = document.getElementById("progress");
  let width = 1;
  let id = setInterval(frame, 20);
  function frame() {
    if (width >= 100) {
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
/* acc = Accumulator, betyder at kalde på noget og trække det tilbage igen */
let acc = document.getElementsByClassName("buy");
                let i;

                for(i=0; i < acc.length; i++){
                    acc[i].addEventListener("click", function(){
                        /* Vælg mellem tilføj og fjerne den aktive class, for at highlighte knappen som kontrollere min div "panel" */
                        this.classList.toggle("active");

                        /* Vælger imellem at vise min div "panel" med tekst indeni, til at gemme den.  */
                        
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
