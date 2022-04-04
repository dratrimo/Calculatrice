let choix;
let nombreUn;
let nombreDeux;
var resultat;
let restart = false;

do {
  do {
    choix = Number(
      prompt(
        "Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division"
      )
    );
  } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

  do {
    nombreUn = Number(prompt("Choisissez le premier nombre :"));
  } while (isNaN(nombreUn));

  do {
    nombreDeux = Number(prompt("Choisissez le second nombre: "));
  } while (isNaN(nombreDeux));

  try {
    function addition(nombreA, nombreB) {
      resultat = nombreA + nombreB;
      return resultat;
    }
    function multiplication(nombreA, nombreB) {
      resultat = nombreA * nombreB;
      return resultat;
    }
    function soustraction(nombreA, nombreB) {
      resultat = nombreA - nombreB;
      return resultat;
    }
    function division(nombreA, nombreB) {
      if (nombreB == 0) {
        throw new Error("impossible de diviser par 0");
      }
      resultat = nombreA / nombreB;
      return resultat;
    }

    switch (choix) {
      case 1:
        resultat = addition(nombreUn, nombreDeux);
        break;
      case 2:
        resultat = multiplication(nombreUn, nombreDeux);
        break;
      case 3:
        resultat = soustraction(nombreUn, nombreDeux);
        break;
      case 4:
        resultat = division(nombreUn, nombreDeux);
        break;

      default:
        throw new Error("Une erreur est survenue !");
        break;
    }
    alert("Le résultat est de : " + resultat);
  } catch (error) {
    alert(error);
  }
  restart = confirm("Voulez-vous refaire un calcul?");
} while (restart);
