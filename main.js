// Obtener elementos del DOM
const modal = document.getElementById("modal-seguridad");
const btnSeguridad = document.getElementById("btn-seguridad");
const closeBtn = document.querySelector(".close-btn");

// Abrir el modal cuando el usuario hace clic en el botón
btnSeguridad.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal si el usuario hace clic fuera de la caja blanca
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Abrir el modal de los destinos al hacer clic en una tarjeta
document.querySelectorAll(".tarjeta-destino").forEach(tarjeta => {
  tarjeta.addEventListener("click", (e) => {
    e.preventDefault();
    
    const modalDestino = document.getElementById("modal-destino");
    const id = tarjeta.getAttribute("data-destino");
    const data = datosDestinos[id];

    if (data && modalDestino) {
      document.getElementById("modal-img").src = data.imagen;
      document.getElementById("modal-titulo").textContent = data.titulo;
      document.getElementById("modal-tag").textContent = data.categoria;
      document.getElementById("modal-desc").textContent = data.descripcion;

      const lista = document.getElementById("modal-lista");
      lista.innerHTML = "";
      data.lugares.forEach(lugar => {
        const li = document.createElement("li");
        li.textContent = lugar;
        lista.appendChild(li);
      });

      modalDestino.style.display = "flex";
    }
  });
});

// Cerrar el modal de destinos al hacer clic en la X
const cerrarModalDestino = document.querySelector("#modal-destino .cerrar-btn");
if (cerrarModalDestino) {
  cerrarModalDestino.addEventListener("click", () => {
    document.getElementById("modal-destino").style.display = "none";
  });
}
