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
