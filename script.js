document.getElementById("miBoton").onclick = function() {
  mostrarToastConDelay("Se guardará en /storage/emulated/0/Download", 2000); 
};

function mostrarToastConDelay(mensaje, retraso) {
  var toast = document.getElementById("toast");
  toast.innerHTML = mensaje;
  setTimeout(function() {
    toast.style.display = "block";
    setTimeout(function() {
      toast.style.display = "none";
    }, 2500); 
  }, retraso);
}