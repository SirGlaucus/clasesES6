export default class Impuestos {
    constructor() {
        this._montoBrutoAnual = 0
        this._deducciones = 0
    }
    setMontoBrutoAnual(montoBrutoAnual){
        this._montoBrutoAnual = montoBrutoAnual
    }
    getMontoBrutoAnual(){
        return this._montoBrutoAnual
    }
    setDeducciones(deducciones){
        this._deducciones = deducciones
    }
    getDeducciones(){
        return this._deducciones
    }
}