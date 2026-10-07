abstract class Habitacion {
  readonly numero: number;

  constructor(numero: number) {
    this.numero = numero;
  }

  abstract calcularPrecio(noches: number): number;
}

class Simple extends Habitacion {
  calcularPrecio(noches: number): number {
    return 20000 * noches;
  }
}

class Suite extends Habitacion {
  calcularPrecio(noches: number): number {
    return 50000 * noches;
  }
}

class Hotel {
  private habitaciones: Habitacion[] = [];
  static totalIngresantes: number = 0;

  checkIn(habitacion: Habitacion): void {
    this.habitaciones.push(habitacion);
    Hotel.totalIngresantes++;
  }

  get cantidad(): number {
    return this.habitaciones.length;
  }

  mostrarPrecios(noches: number): void {
    for (const habitacion of this.habitaciones) {
      console.log(
        `Habitación ${habitacion.numero} paga $${habitacion.calcularPrecio(noches)}`,
      );
    }
  }
}

const hotel = new Hotel();

hotel.checkIn(new Simple(2));
hotel.checkIn(new Suite(2));
hotel.mostrarPrecios(2);
console.log(`Habitaciones ocupadas: ${hotel.cantidad}`);
console.log(`Total histórico de check-ins: ${Hotel.totalIngresantes}`);
