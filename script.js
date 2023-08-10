document.getElementById("miBoton").onclick = function() {
  mostrarToast("Se guardará en /storage/emulated/0/Download");
};

function mostrarToast(mensaje) {
  var toast = document.getElementById("toast");
  toast.innerHTML = mensaje;
  toast.style.display = "block";
  setTimeout(function() {
    toast.style.display = "none";
  }, 2500);
}
