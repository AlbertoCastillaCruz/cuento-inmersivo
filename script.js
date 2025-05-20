document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("playBtn");
  const audio = document.getElementById("musica");
  const cuentoDiv = document.getElementById("cuento");

  const cuento = `
    Había una vez un bosque encantado donde los árboles susurraban historias antiguas al viento.
    Un joven curioso se adentró en él sin saber que esa caminata cambiaría su destino para siempre...
  `;

  if (playBtn) {
    playBtn.addEventListener("click", function () {
      // Reproducir la música
      audio.volume = 0.5; // Puedes ajustar el volumen
      audio.play();

      // Mostrar el cuento
      mostrarTextoConAnimacion(cuento, cuentoDiv, 50);

      // Ocultar el botón
      playBtn.style.display = "none";
    });
  }
});

function mostrarTextoConAnimacion(texto, contenedor, velocidad) {
  let i = 0;
  function escribir() {
    if (i < texto.length) {
      contenedor.innerHTML += texto.charAt(i);
      i++;
      setTimeout(escribir, velocidad);
    }
  }
  escribir();
}
