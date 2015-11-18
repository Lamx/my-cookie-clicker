var bouton = document.getElementById('bouton'),
    affichage = document.getElementById('affichage'),
    score = 0,
    multiplicateur = document.getElementById('multiplicateur'),
    compteur = 1;

    bouton.addEventListener('click', function(){
        score = score+compteur;
        affichage.innerHTML = parseInt(score)+' cookies';
    });

    multiplicateur.addEventListener('click', function incrementer() {
        if (score > 49) {
        compteur++;
        score = score-50;
        affichage.innerHTML = parseInt(score)+' cookies';
        multiplicateur.innerHTML = 'Multiplicateur x'+parseInt(compteur);
        } else {
            alert('Vous n\'avez pas assez de cookies ! Un multiplicateur coûte 50 cookies.')
        }
    })