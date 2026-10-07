class ArchivoLog {
  escribir(linea: string): void {
    console.log(`[LOG] ${linea}`);
  }
}

class ServicioNotificaciones {
  notificar(canal: string, mensaje: string): void {
    let costo = 0;
    if (canal === "sms") {
      costo = 15;
    }
    const log = new ArchivoLog();
    log.escribir(`${canal}: "${mensaje}" ($${costo})`);
  }
}

const servicio = new ServicioNotificaciones();
servicio.notificar("email", "Hola");
servicio.notificar("sms", "Hola");
