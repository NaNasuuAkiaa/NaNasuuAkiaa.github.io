const gravityText = document.querySelector(".gravity-text");

gravityText.addEventListener("mouseover", function() {
  this.style.animationPlayState = "running"; /* Inicia la animación al pasar el cursor sobre el elemento */
});

gravityText.addEventListener("mouseout", function() {
  this.style.animationPlayState = "paused"; /* Pausa la animación al sacar el cursor del elemento */
});