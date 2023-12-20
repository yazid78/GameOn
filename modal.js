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
const divmerci = document.querySelector(".div_merci");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Fermer le modal
croix.addEventListener("click", fermer);
function fermer() {
  modalbg.style.display = "none";
  reserve.style.display = "block";
  merci.style.display = "none"; 
}

let myform = document.querySelector(".myform");

myform.addEventListener('submit', (e) => {
  e.preventDefault();

  // initinier variable a true
  let Valide = true;

  // Validation pour le champ "Prenom"
  let prenom = document.querySelector(".text-control#first");
  let prenomVide = document.getElementById("prenomVide");
  let prenomFormat = document.getElementById("prenomFormat");
  let prenomLongueur = document.getElementById("prenomLongueur");
  let myregex = /^[a-zA-Z-\s]+$/;

  prenomVide.style.display = "none";
  prenomFormat.style.display = "none";
  prenomLongueur.style.display = "none";

  if (prenom.value.trim() === "") {
    prenomVide.style.display = "block";
    Valide = false;
  } else if (!myregex.test(prenom.value)) {
    prenomFormat.style.display = "block";
    Valide = false;
  } else if (prenom.value.length < 2) {
    prenomLongueur.style.display = "block";
    Valide = false;
  }

  // Validation pour le champ "Nom"
  let nom = document.querySelector(".text-control#last");
  let nomVide = document.getElementById("nomVide");
  let nomFormat = document.getElementById("nomFormat");
  let nomLongueur = document.getElementById("nomLongueur");
  let myregexnom = /^[a-zA-Z-\s]+$/;

  nomFormat.style.display = "none";
  nomLongueur.style.display = "none";
  nomVide.style.display = "none";

  if (nom.value.trim() === "") {
    nomVide.style.display = "block";
    Valide = false;
  } else if (!myregexnom.test(nom.value)) {
    nomFormat.style.display = "block";
    Valide = false;
  } else if (nom.value.length < 2) {
    nomLongueur.style.display = "block";
    Valide = false;
  }

  // Validation pour le champ "email"
  let email = document.querySelector(".text-control#email");
  let emailVide = document.getElementById("emailVide");
  let emailFormat = document.getElementById("emailFormat");
  let myregexemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  emailVide.style.display = "none";
  emailFormat.style.display = "none";

  if (email.value.trim() === "") {
    emailVide.style.display = "block";
    Valide = false;
  } else if (!myregexemail.test(email.value)) {
    emailFormat.style.display = "block";
    Valide = false;
  }
  
  // Validation pour le champ "Date de naissance"
let date = document.querySelector(".text-control#birthdate");
let dateVide = document.getElementById("dateVide");
let dateFormat = document.getElementById("dateFormat");
let ageRestriction = document.getElementById("ageRestriction");
let myregexdate = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;

dateVide.style.display = "none";
dateFormat.style.display = "none";
ageRestriction.style.display = "none";


if (date.value.trim() === "") {
  dateVide.style.display = "block";
  Valide = false;
} else if (!myregexdate.test(date.value)) {
  dateFormat.style.display = "block";
  Valide = false;
} else {
  // Vérifier l'âge
  let enteredDate = new Date(date.value);
  let currentDate = new Date();
  let age = currentDate.getFullYear() - enteredDate.getFullYear();


  // Vérifier si l'utilisateur a moins de 18 ans
  if (age < 18) {
    ageRestriction.style.display = "block";
    Valide = false;
  }
}



  // Validation pour le champ "tournoi GameOn"
  let quantity = document.querySelector(".text-control#quantity");
  let tounoisVide = document.getElementById("tounoisVide");
  let tournoisFormat = document.getElementById("tournoisFormat");
  let myregexquantity = /^[0-9]{1,2}$/;
  
  tounoisVide.style.display = "none";
  tournoisFormat.style.display = "none";
  
  if (quantity.value.trim() === "") {
    tounoisVide.style.display = "block";
    Valide = false;
  } else if (!myregexquantity.test(quantity.value)) {
    tournoisFormat.style.display = "block";
    Valide = false;
  }

// Vérifie si au moins un radio button est sélectionné
let radioButtons = document.getElementsByName("location");
let isChecked = false;

for (let i = 0; i < radioButtons.length; i++) {
  if (radioButtons[i].checked) {
    isChecked = true;
    break; // Sort de la boucle dès qu'un radio button est sélectionné
  }
}

// Affiche le message d'erreur uniquement s'il n'y a aucun radio button sélectionné
if (!isChecked) {
  document.getElementById("checkboxVide").style.display = "block"; 
  Valide = false;
} else {
  document.getElementById("checkboxVide").style.display = "none"; 
}

// Vérifie si la checkbox est cochée lors de la soumission du formulaire
let checkbox = document.getElementById("checkbox1");
let errorMessage = document.querySelector(".conditionVide");

// Vérifie l'état de la checkbox lors de l'exécution du code
if (!checkbox.checked) {
  errorMessage.style.display = "block"; 
   Valide = false;
} else {
  errorMessage.style.display = "none"; 
}


  // Verif de tous les champs 
  if (Valide) {
    // Code pour le cas où le formulaire est valide
    reserve.style.display = "none";
    merci.style.display = "block";
    btnFermer.addEventListener("click", fermer);
    croix.addEventListener("click", fermer);
  }
});

// Décocher Radio
croix.addEventListener("click", function () {
  let radio = document.querySelectorAll("input[type='radio']");
  radio.forEach((btn) => (btn.checked = false));
});
