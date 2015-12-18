var bouton = document.getElementById('bouton'),
    cookie = document.getElementById('cookie'),
    affichage = document.getElementById('affichage'),
    score = 0,
    multiplicateur = document.getElementById('multiplicateur'),
    compteur = 1,
    autoclic = document.getElementById('autoclic'),
    compteurAutoclic = 0;

function afficherScore() {
    if (score <= 1) {
        affichage.innerHTML = "SCORE : "+score+" COOKIE";
    } else {
        affichage.innerHTML = "SCORE : "+score+" COOKIES";
    }
}

function afficherCompteur() {
    multiplicateur.innerHTML = "Multiplicateur x"+compteur+" (prix du prochain : "+prix()+" cookies)";
}

function reduireCookie() {
    cookie.style.width = 150;
    cookie.style.margin = 25;
}

function clic() {
    cookie.style.width = 160;
    cookie.style.margin = 20;
    setTimeout(reduireCookie, 100);
    score = score+compteur;
    afficherScore();
}

function prix() {
    return 20*compteur*compteur;
}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score-prix();
        compteur = compteur+1;
        afficherCompteur();
        afficherScore();
    } else {
        alert("Votre score est insuffisant !");
    }
}

function acheterAutoclic() {
    if (score >=200) {
        score = score-200;
        compteurAutoclic = compteurAutoclic+1;
        autoclic.innerHTML = "Autoclic x"+compteurAutoclic+" (prix : 200 cookies)";
        setInterval(clic, 1000);
    } else {
        alert("Votre score est insuffisant !");
    }
}

bouton.addEventListener('click', clic, false)
afficherScore();
afficherCompteur();
autoclic.addEventListener('click', acheterAutoclic, false)
multiplicateur.addEventListener('click', acheterMultiplicateur, false)
