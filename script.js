let total = 0;

function agregarAlCarrito(nombre, precio) {
    const lista = document.getElementById("lista-carrito");
    const totalTexto = document.getElementById("total");

    const item = document.createElement("li");
    item.textContent = nombre + " - $" + precio;

    lista.appendChild(item);

    total = total + precio;
    totalTexto.textContent = total;
}
function mostrarCategoria(categoria) {
    const secciones = document.querySelectorAll(".categoria");

    secciones.forEach(function(seccion) {
        seccion.style.display = "none";
    });

    const seccionElegida = document.getElementById(categoria);
    seccionElegida.style.display = "block";
}
function finalizarCompra() {
    if (total === 0) {
        alert("El carrito está vacío");
    } else {
        document.getElementById("modal-compra").style.display = "flex";
        document.getElementById("total-modal").textContent = total;
        document.getElementById("datos-delivery").style.display = "none";
        document.getElementById("datos-retiro").style.display = "none";
    }
}

function cerrarModal() {
    document.getElementById("modal-compra").style.display = "none";
}

function elegirDelivery() {
    const totalConDelivery = total + 1000;

    document.getElementById("datos-delivery").style.display = "block";
    document.getElementById("datos-retiro").style.display = "none";
    document.getElementById("total-delivery").textContent = totalConDelivery;
}

function elegirRetiro() {
    document.getElementById("datos-retiro").style.display = "block";
    document.getElementById("datos-delivery").style.display = "none";
    document.getElementById("total-retiro").textContent = total;
}

function confirmarDelivery() {
    const ubicacion = document.getElementById("ubicacion").value;

    if (ubicacion === "") {
        alert("Por favor escribí tu dirección o ubicación");
    } else {
        const totalFinal = total + 1000;

        alert("Vas a pagar $" + totalFinal + ". Escribí ese monto en Mercado Pago.");

        window.location.href = "https://link.mercadopago.com.ar/morena34859";
    }
}

function confirmarRetiro() {
    alert("Vas a pagar $" + total + ". Escribí ese monto en Mercado Pago.");

    window.location.href = "https://link.mercadopago.com.ar/morena34859";
}