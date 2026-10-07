// OCP
interface Canal {
  nombre: string;
  calcularCosto(): number;
}

interface Registro {
  escribir(linea: string): void;
}

class Email implements Canal {
  nombre: string = "Email";

  calcularCosto(): number {
    return 0;
  }
}

class SMS implements Canal {
  nombre: string = "SMS";

  calcularCosto(): number {
    return 15;
  }
}

class ArchivoLog implements Registro {
  escribir(linea: string): void {
    console.log(`[LOG] ${linea}`);
  }
}

class RegistroBaseDeDatos implements Registro {
  escribir(linea: string): void {
    console.log(`[DB] ${linea}`);
  }
}

class ServicioNotificaciones {
  private registro: Registro;

  constructor(registro: Registro) {
    this.registro = registro;
  }

  notificar(canal: Canal, mensaje: string): void {
    this.registro.escribir(
      `${canal.nombre}: "${mensaje}" ($${canal.calcularCosto()})`,
    );
  }
}

const servicio = new ServicioNotificaciones(new ArchivoLog());
servicio.notificar(new Email(), "Hola");
servicio.notificar(new SMS(), "Hola");

const servicio2 = new ServicioNotificaciones(new RegistroBaseDeDatos());
servicio2.notificar(new Email(), "Prueba");
