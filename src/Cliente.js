export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre
        this._impuesto = impuestos
    }
    setNombre(nombre) {
        this._nombre = nombre
    }
    getNombre() {
        return this._nombre
    }
    setImpuesto(impuesto) {
        this._impuesto = impuesto
    }
    calcularImpuesto() {
        return (this._impuesto.getMontoBrutoAnual() - this._impuesto.getDeducciones()) * 0.21
    }
}