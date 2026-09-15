document.addEventListener("DOMContentLoaded", () => {
  // Configuración del modal de Seguridad (por si existe en el sitio)
  const modalSeguridad = document.getElementById("modal-seguridad");
  const btnSeguridad = document.getElementById("btn-seguridad");
  const closeBtnSeguridad = document.querySelector(".close-btn");

  if (btnSeguridad && modalSeguridad) {
    btnSeguridad.addEventListener("click", () => {
      modalSeguridad.style.display = "flex";
    });
  }

  if (closeBtnSeguridad && modalSeguridad) {
    closeBtnSeguridad.addEventListener("click", () => {
      modalSeguridad.style.display = "none";
    });
  }

  // Configuración del modal de Destinos
  const modalDestino = document.getElementById("modal-destino");
  const tarjetas = document.querySelectorAll(".tarjeta-destino");

  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", (e) => {
      e.preventDefault();
      
      const id = tarjeta.getAttribute("data-destino");
      if (typeof datosDestinos === "undefined") {
        console.error("No se encontró la variable datosDestinos.");
        return;
      }

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
  if (cerrarModalDestino && modalDestino) {
    cerrarModalDestino.addEventListener("click", () => {
      modalDestino.style.display = "none";
    });
  }

  // Cerrar cualquier modal abierto si se hace clic fuera del contenido
  window.addEventListener("click", (e) => {
    if (modalDestino && e.target === modalDestino) {
      modalDestino.style.display = "none";
    }
    if (modalSeguridad && e.target === modalSeguridad) {
      modalSeguridad.style.display = "none";
    }
  });
});
