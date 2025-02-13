// Contraseña predefinida
const CONTRASENA = "1106";

// Variable para almacenar la contraseña ingresada
let contrasenaIngresada = "";

// Función para agregar números al display
function agregarNumero(numero) {
    const textoCodigo = document.getElementById('texto-codigo');
    const display = document.querySelector('.display');

    if (textoCodigo.textContent === 'Contraseña') {
        textoCodigo.textContent = '';
    }

    textoCodigo.textContent += '*';
    contrasenaIngresada += numero;
    display.classList.add('modo-password');

    if (contrasenaIngresada.length === CONTRASENA.length) {
        if (contrasenaIngresada === CONTRASENA) {
            mostrarContador();
        } else {
            alert("Contraseña incorrecta. Inténtalo de nuevo.");
            textoCodigo.textContent = 'Contraseña';
            display.classList.remove('modo-password');
            contrasenaIngresada = "";
        }
    }
}

// Función para ocultar todas las secciones
function ocultarTodasLasSecciones() {
    const secciones = [
        document.querySelector('.container'),
        document.getElementById('seccion-contador'),
        document.getElementById('seccion-galeria'),
        document.getElementById('seccion-carta')
    ];
    
    secciones.forEach(seccion => {
        if (seccion) {
            seccion.style.display = 'none';
        }
    });
}

// Función para mostrar el contador
function mostrarContador() {
    ocultarTodasLasSecciones();
    const seccionContador = document.getElementById('seccion-contador');
    seccionContador.style.display = 'block';
}

// Función para mostrar la galería de fotos
function mostrarGaleria() {
    ocultarTodasLasSecciones();
    const seccionGaleria = document.getElementById('seccion-galeria');
    seccionGaleria.style.display = 'block';
}

// Función para mostrar la carta
function mostrarCarta() {
    ocultarTodasLasSecciones();
    const seccionCarta = document.getElementById('seccion-carta');
    seccionCarta.style.display = 'block';
}

// Función para actualizar el contador
function actualizarContador() {
    const fechaInicio = new Date('2015-10-31');
    const ahora = new Date();

    let anos = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    if (anos < 0) anos = 0;
    if (meses < 0) meses = 0;
    if (dias < 0) dias = 0;
    if (horas < 0) horas = 0;
    if (minutos < 0) minutos = 0;
    if (segundos < 0) segundos = 0;

    document.getElementById('anos').textContent = anos;
    document.getElementById('meses').textContent = meses;
    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);
