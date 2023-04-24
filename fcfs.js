class Proceso {
  constructor(nombre, tiempoLlegada, tiempoEjecucion) {
    this.nombre = nombre;
    this.tiempoLlegada = tiempoLlegada;
    this.tiempoEjecucion = tiempoEjecucion;
    this.tiempoFinalizacion = 0;
    this.tiempoEspera = 0;
    this.tiempoRetorno = 0;
  }
}

const procesos = [];

function crearProceso() {
  const nombre = prompt("Introduce el nombre del proceso");
  const tiempoLlegada = parseInt(prompt("Introduce el tiempo de llegada"));
  const tiempoEjecucion = parseInt(prompt("Introduce el tiempo de ejecución"));
  const proceso = new Proceso(nombre, tiempoLlegada, tiempoEjecucion);
  procesos.push(proceso);
  mostrarProcesos();
}

function mostrarProcesos() {
  const llenarDatos = document.querySelector(".llenar-datos");
  llenarDatos.innerHTML = "";

  for (const element of procesos) {
    const proceso = element;
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${proceso.nombre}</td>
        <td>${proceso.tiempoLlegada}</td>
        <td>${proceso.tiempoEjecucion}</td>
        <td>${proceso.tiempoFinalizacion}</td>
        <td>${proceso.tiempoEspera}</td>
        <td>${proceso.tiempoRetorno}</td>
      `;

    llenarDatos.appendChild(fila);
  }
}

function calcularTiempos() {
  let tiempoActual = 0;
  for (const element of procesos) {
    const proceso = element;
    tiempoActual += proceso.tiempoEjecucion;
    proceso.tiempoFinalizacion = tiempoActual;
    proceso.tiempoRetorno = proceso.tiempoFinalizacion - proceso.tiempoLlegada;
    proceso.tiempoEspera = proceso.tiempoRetorno - proceso.tiempoEjecucion;
  }
  mostrarProcesos();
}

document
  .getElementById("btn-agregar-proceso")
  .addEventListener("click", crearProceso);
document
  .getElementById("btn-calcular-tiempos")
  .addEventListener("click", calcularTiempos);
