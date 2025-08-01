const elements = {
    buttonToggled: false 
}

addControl();
function addControl(){
  	//create wrapper div
	let control = document.createElement("div");
  	control.id = "control";
  	//create button
  	let button = document.createElement("button");
  	button.id = "theme";
  	button.setAttribute("type", "button");
  	let buttonText = document.createTextNode("Dark Theme");
  	button.appendChild(buttonText);
  	control.appendChild(button);
  	//create regular A
  	let regA = document.createElement("a");
  	regA.id = "reg";
  	regA.className = "active";
  	regA.setAttribute("href", "#");
  	regA.setAttribute("title", "Regular Text Size");
  	let regAText = document.createTextNode("A");
  	regA.appendChild(regAText);
  	control.appendChild(regA);
  	//create larger A
  	let medA = document.createElement("a");
  	medA.id = "larger";
  	medA.setAttribute("href", "#");
  	medA.setAttribute("title", "Larger Text Size");
  	let medAText = document.createTextNode("A");
  	medA.appendChild(medAText);
  	control.appendChild(medA);
  	//create largest A
  	let lgA = document.createElement("a");
  	lgA.id = "largest";
  	lgA.setAttribute("href", "#");
  	lgA.setAttribute("title", "Largest Text Size");
  	let lgAText = document.createTextNode("A");
  	lgA.appendChild(lgAText);
  	control.appendChild(lgA);
  	//add to DOM
  	document.querySelector("header").appendChild(control);
  	addElements();
  
}

function addElements(){
	elements.themeButton = document.getElementById("theme");
  	elements.regSize = document.getElementById("reg");
  	elements.largerSize = document.getElementById("larger");
  	elements.largestSize = document.getElementById("largest");
  	//
  	elements.themeButton.addEventListener("click", toggleTheme);
    elements.regSize.addEventListener("click", toggleSize);
    elements.largerSize.addEventListener("click", toggleSize);
    elements.largestSize.addEventListener("click", toggleSize);
}

function toggleTheme() {
    
    elements.buttonToggled = !elements.buttonToggled;
    
    if (elements.buttonToggled === true) {
        elements.themeButton.style.background = "#000";
        elements.themeButton.style.color = "#fff";
        elements.themeButton.innerText = "Light Theme";
        document.body.style.background = "#000";
        document.querySelector("blockquote").style.color = "#fff";
        document.querySelectorAll(".whiteText").forEach(elem => {
            elem.style.color = "#fff";
        });
    } else {
        elements.themeButton.style.background = "#fff";
        elements.themeButton.style.color = "#000";
        elements.themeButton.innerText = "Dark Theme";
        document.body.style.background = "#fff";
        document.querySelector("blockquote").style.color = "#000";
        document.querySelectorAll(".blackText").forEach(elem => {
            elem.style.color = "#000";
        });
    }
}

function toggleSize(event) {

  	event.preventDefault();

  	if (event.target.className === "active") return;
  	let size = event.target.id;
  	document.body.className = size;
  	event.target.parentElement.querySelector(".active").className = "";
  	event.target.className = "active";
}