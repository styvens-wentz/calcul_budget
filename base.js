const loyer_charge = document.getElementById('loyer_charge');
const remboursement_credit = document.getElementById('remboursement_credit');
const eau_elec_gaz = document.getElementById('eau_elec_gaz');
const tel_internet = document.getElementById('tel_internet');
const assur_hab = document.getElementById('assur_hab');
const assur_vehicu = document.getElementById('assur_vehicu');
const mutuelle = document.getElementById('mutuelle');
const frais_garde = document.getElementById('frais_garde');
const impot_revenu = document.getElementById('impot_revenu');
const impot_locaux = document.getElementById('impot_locaux');
const courses = document.getElementById('courses');
const essence_transport = document.getElementById('essence_transport');
const activite = document.getElementById('activite');
const sortie = document.getElementById('sortie');
const autre_depense = document.getElementsByClassName('depense_autre');
const montant_salaire = document.getElementById('montant_salaire');
const montant_aide = document.getElementById('montant_aide');
const montant_rente = document.getElementById('montant_rente');
const autre_recette = document.getElementsByClassName('recette_autre');
const epargne_libre = document.getElementById('epargne_libre');
const somme_restant = document.getElementById('somme_restant');
const proposition = document.getElementById('proposition');
const valider = document.getElementById('valider');
const ajout_autre_depense = document.getElementById('ajout_autre_depense');
const ajout_autre_recette = document.getElementById('ajout_autre_recette');
const effacer = document.getElementById('effacer');
let depense_autre;
let recette_autre;
let recette_total;
let depense_total;

// Ajout d'une fonction au click du bouton autre depense pour ajouter une casse autre depense
ajout_autre_depense.addEventListener("click", function () {
    document.getElementById('aff_depense').style.display = 'initial'; // affichage de la case autre
    document.getElementById('bout_depense').remove(); // suppression du boutton
});

// Ajout d'une fonction au click du bouton autre recette pour ajouter une casse autre recette
ajout_autre_recette.addEventListener("click", function () {
    document.getElementById('aff_recette').style.display = 'initial'; // affichage de la case autre
    document.getElementById('bout_recette').remove(); //suppression du boutton
});

// function pour le calcul des depenses
function calcul_depense () {
    depense_total = Number(loyer_charge.value) + Number(remboursement_credit.value) + Number(eau_elec_gaz.value) + Number(tel_internet.value) + Number(assur_hab.value) + depense_autre
    + Number(assur_vehicu.value) + Number(mutuelle.value) + Number(frais_garde.value) + Number(impot_revenu.value) + Number(impot_locaux.value) + Number(courses.value) + Number(essence_transport.value)
    + Number(activite.value) + Number(sortie.value) + Number(epargne_libre.value);
}

// function pour le calcul des recettes
function calcul_recette () {
    recette_total = Number(montant_salaire.value) + Number(montant_aide.value) + Number(montant_rente.value) + recette_autre;
}

// function de boucle des autre recette et depense
function autre () {
    // On creer une boucle pour recuperer les nombre des champs autre recette et depense
    for (const depense of autre_depense) {
        depense_autre = Number(depense.value);
    }
    for (const recette of autre_recette) {
        recette_autre = Number(recette.value);
    }
}

// Ajout d'une fonction au clic du bouton valider pour faire le calcul
valider.addEventListener("click", function () {

    // On appel la fonction de boucle pour les autre recette et depense
    autre();

    // On appel la fonction de calcul des depenses
    calcul_depense();

    // On appel la fonction de calcul des depenses
    calcul_recette();

    // Calcul du restant
    const restant = Number(recette_total) - Number(depense_total);

    // Condition si l'epargne noté est inferieur ou egale a la somme restant
    if (Number(epargne_libre.value) === 0) {
        // On fait le calcul des recettes moins les depenses puis on affiche le resultat
        somme_restant.innerHTML = Number(recette_total) - Number(depense_total);
    } else if (Number(epargne_libre.value) <= Number(restant) + Number(epargne_libre.value)) {
        // On fait le calcul des recettes moins les depenses puis on affiche le resultat
        somme_restant.innerHTML = Number(recette_total) - Number(depense_total);
    } else if (Number(epargne_libre.value) > Number(restant)) {
        alert('Vous ne pouvais épargner que ' + (Number(restant) + Number(epargne_libre.value)) + '€ Max')
    }

    // condition pour modifier la couleur de la somme selon si bon/nul/mauvais
    if (Number(restant) === 0) {
        somme_restant.style.color = 'rgba(54, 18, 255, 0.69)';
    } else if (Number(restant) < 0) {
        somme_restant.style.color = 'red';
    } else if (Number(restant) > 0) {
        somme_restant.style.color = 'green';
    }

    // Condition pour une proposition selon le solde
    if (Number(restant) < 0 && Number(epargne_libre.value) > 0) {
        proposition.innerHTML = '';
    } else if (Number(restant) < 0) {
        proposition.innerHTML = 'Vous êtes a découvert';
    } else if (Number(restant) === 0) {
        proposition.innerHTML = 'Vous ne pouvez rien vous acheter';
    } else if (Number(restant) < 0.90) {
        proposition.innerHTML = 'Vous pouvez vous acheter des bonbons';
    } else if (Number(restant) < 5) {
        proposition.innerHTML = 'Vous pouvez vous acheter du pain';
    } else if (Number(restant) < 10) {
        proposition.innerHTML = 'Vous pouvez vous acheter un livre';
    } else  if (Number(restant) < 15) {
        proposition.innerHTML = 'Vous pouvez vous acheter un paquet de cigarette';
    } else if (Number(restant) < 50) {
        proposition.innerHTML = 'Vous pouvez vous acheter une décoration';
    } else if (Number(restant) < 100) {
        proposition.innerHTML = 'Vous pouvez vous acheter une paire de chaussure';
    } else if (Number(restant) < 200) {
        proposition.innerHTML = 'Vous pouvez vous acheter de nouveaux vêtements';
    } else if (Number(restant) < 600) {
        proposition.innerHTML = 'Vous pouvez vous acheter un petit électroménager';
    } else if (Number(restant) < 1000) {
        proposition.innerHTML = 'Vous pouvez vous acheter un appareil électroménager';
    } else if (Number(restant) < 1500) {
        proposition.innerHTML = 'Vous pouvez louer un logement';
    } else if (Number(restant) < 5000) {
        proposition.innerHTML = "Vous pouvez vous acheter une voiture d'occasion";
    } else if (Number(restant) < 10000) {
        proposition.innerHTML = "Vous pouvez vous acheter voiture d'occasion récente";
    } else if (Number(restant) >= 10000 && Number(restant) < 50000) {
        proposition.innerHTML = 'Vous pouvez vous acheter une voiture neuve';
    } else if (Number(restant) >= 50000 && Number(restant) < 100000) {
        proposition.innerHTML = 'Vous pouvez vous acheter une voiture neuve haut de gamme';
    } else if (Number(restant) >= 100000 && Number(restant) < 1000000) {
        proposition.innerHTML = 'Vous pouvez vous acheter une maison';
    } else if (Number(restant) >= 1000000 && Number(restant) < 1000000000) {
    proposition.innerHTML = 'Vous êtes Millionnaire, faite juste attention';
    } else if (Number(restant) >= 1000000000 ) {
    proposition.innerHTML = 'Vous êtes Milliardaire, acheter ce que vous voulez';
    }
});

// Ajout d'une fonction au clic du bouton effacer pour effacer les champs
effacer.addEventListener("click", function () {
    const effacer_input = document.getElementsByTagName("input");
    for ( const modif of effacer_input) {
        modif.value = '';
    }
    effacer.value = 'Effacer';
    valider.value = 'Valider';
    ajout_autre_recette.value = '+';
    ajout_autre_depense.value = '+';
});