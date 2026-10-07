interface Envio {
  calcularCosto(base: number): number;
}

class EnvioEstandar implements Envio {
  calcularCosto(base: number): number {
    return base;
  }
}

class EnvioExpress implements Envio {
  calcularCosto(base: number): number {
    return base + ConfiguracionEmpresa.obtenerInstancia().recargoExpress;
  }
}

class ConfiguracionEmpresa {
  private static instancia: ConfiguracionEmpresa;
  readonly recargoExpress = 2500;
  private constructor() {}

  static obtenerInstancia(): ConfiguracionEmpresa {
    if (!ConfiguracionEmpresa.instancia) {
      return (ConfiguracionEmpresa.instancia = new ConfiguracionEmpresa());
    }
    return ConfiguracionEmpresa.instancia;

    // return ConfiguracionEmpresa.instancia
    //   ? ConfiguracionEmpresa.instancia
    //   : (ConfiguracionEmpresa.instancia = new ConfiguracionEmpresa());
  }
}

class FabricaEnvios {
  static crear(tipo: "estandar" | "express"): Envio {
    if (tipo === "estandar") {
      return new EnvioEstandar();
    }

    if (tipo === "express") {
      return new EnvioExpress();
    }

    throw new Error("Tipo de envio no válido!");

    // switch (tipo) {
    //   case "estandar":
    //     return new EnvioEstandar();
    //   case "express":
    //     return new EnvioExpress();
    //   default:
    //     throw new Error("Tipo de Envio no válido!");
    // }
  }
}

const empresa1 = ConfiguracionEmpresa.obtenerInstancia();
const empresa2 = ConfiguracionEmpresa.obtenerInstancia();
const base = 3000;
console.log(`Mismo Singleton: ${empresa1 === empresa2}
Estándar: $${FabricaEnvios.crear("estandar").calcularCosto(base)}
Express: $${FabricaEnvios.crear("express").calcularCosto(base)}`);
