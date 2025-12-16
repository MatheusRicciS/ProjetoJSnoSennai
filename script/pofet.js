const liquido = document.getElementById('liquid');
const pote = document.getElementById('frasco');

document.querySelectorAll('input[name="fase"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.documentElement.style
      .setProperty("--cor", radio.value);
  });
});

// EFEITO → parte de cima do líquido
document.querySelectorAll('input[name="efeto"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.documentElement.style
      .setProperty("--parte", radio.value);
  });
});
