/* Fscciamo accendi e spegni
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni" 
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
e così via    */

//seleziono gli elementi del DOM

const lampadinaEl = document.getElementById("lampadina");
const buttonEl = document.getElementById("button");

function switchStatus() {
   if (buttonEl.textContent.includes("Accendi")) {
    lampadinaEl.src="/bonus/img/yellow_lamp.png"
    buttonEl.textContent="Spegni"
   } else if (buttonEl.textContent.includes("Spegni")) {
    lampadinaEl.src="/bonus/img/white_lamp.png"
    buttonEl.textContent="Accendi"
   }
}
buttonEl.addEventListener("click", switchStatus);