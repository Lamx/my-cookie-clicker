var bouton = document.getElementById('bouton'),
    affichage = document.getElementById('affichage'),
    score = 0,
    multiplicateur = document.getElementById('multiplicateur'),
    compteur = 1,
    autoclick = document.getElementById('autoclick'),
    supercompteur = 0;

    bouton.addEventListener('click', function(){
        score = score + compteur;
        affichage.innerHTML = parseInt(score)+' cookies';
    });

    function prix() {
        return 20*compteur*compteur;
    };

    multiplicateur.addEventListener('click', function incrementer() {
        if (score >= prix()) {
        score = score - prix();
        compteur = compteur + 1;
        affichage.innerHTML = parseInt(score)+' cookies';
        multiplicateur.innerHTML = 'Multiplicateur x'+parseInt(compteur)+' (prix du prochain : '+prix()+' cookies)';
        } else {
            alert("Votre score est insuffisant !")
        }
    })