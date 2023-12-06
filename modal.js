function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const croix = document.querySelector(".close");
const parti = document.querySelector(".btn-submit");
const modalbody = document.querySelector(".modal-body");
const btnFermer = document.getElementById("fermer");
const merci = document.querySelector(".merci");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermer le modale
croix.addEventListener("click", fermer);
function fermer() {
  modalbg.style.display = "none";
  reserve.style.display = "block";
  merci.style.display = "none";
}

//Valider le formulaire
let myform = document.querySelector(".myform");

  myform.addEventListener('submit', (e) => {
      e.preventDefault();

      let prenom = document.querySelector(".text-control");
      let prenomVide = document.getElementById("prenomVide");
      let prenomFormat = document.getElementById("prenomFormat");
      let prenomLongueur = document.getElementById("prenomLongueur");
      let myregex = /^[a-zA-Z-\s]+$/;

      prenomVide.style.display = "none";
      prenomFormat.style.display = "none";
      prenomLongueur.style.display = "none";

      if (prenom.value.trim() === "") {
        prenomVide.style.display = "block";
      } else if (!myregex.test(prenom.value)) {
        prenomFormat.style.display = "block";
      } else if (prenom.value.length < 2) {
        prenomLongueur.style.display = "block";
      } else {
        reserve.style.display = "none";

      




        
        merci.style.display = "block";
        btnFermer.addEventListener("click", fermer);
        croix.addEventListener("click", fermer);
      }
 
});


  
  
// Décocher Radio
croix.addEventListener("click", function () {
  let radio = document.querySelectorAll("input[type='radio']");
  console.log(radio);
  radio.forEach((btn) => (btn.checked = false));
});
