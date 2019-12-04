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



valider.addEventListener("click", function () {
    const depense_total = Number(loyer_charge.value) + Number(remboursement_credit.value) + Number(eau_elec_gaz.value) + Number(tel_internet.value) + Number(assur_hab.value)
    + Number(assur_vehicu.value) + Number(mutuelle.value) + Number(frais_garde.value) + Number(impot_revenu.value) + Number(impot_locaux.value) + Number(courses.value) + Number(essence_transport.value) + Number(activite.value) + Number(sortie.value);
    const recette_total = Number(montant_salaire.value) + Number(montant_aide.value) + Number(montant_rente.value);
    somme_restant.innerHTML = Number(recette_total) - Number(depense_total);
});