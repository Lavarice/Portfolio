let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,    
    progressEndValue = 70,    
    speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`

    circularProgress.style.background = `conic-gradient(#0CF25D ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }    
}, speed);



// Nombre d'étoiles
const starCount = 100;

// Création et positionnement des étoiles
for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  // Taille aléatoire des étoiles
  const size = Math.random() * 5 + 2 + "px";
  star.style.width = size;
  star.style.height = size;

  // Position aléatoire
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";

  // Délai d'animation pour un effet de clignotement différent
  star.style.animationDelay = Math.random() * 3 + "s";

  document.body.appendChild(star);
}