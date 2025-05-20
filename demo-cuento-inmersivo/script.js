const cuentoTexto = `
  Era una noche oscura y silenciosa. El viento soplaba entre los árboles del bosque...
  Cada paso que daba lo acercaba más a lo desconocido.
  [PAUSA]
  Un crujido detrás de él hizo que se detuviera en seco...
`;

function iniciarLectura() {
  const div = document.getElementById("cuento");
  const musica = document.getElementById("musica");
  musica.play();

  let i = 0;
  function escribir() {
    if (i < cuentoTexto.length) {
      div.textContent += cuentoTexto.charAt(i);
      i++;
      setTimeout(escribir, 50);
    }
  }

  escribir();
}
