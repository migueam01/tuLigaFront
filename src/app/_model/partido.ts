export class Partido {
    id: number;
    eqpA: number;
    eqpB: number;
    eqpV: number;
    golA: number;
    golB: number;
    puntosA: number;
    puntosB: number;
    fechaHora: Date | undefined;
    observacion: string;
    estado: number;
    createOn: Date | undefined;
    createdBy: string;

    constructor() {
        this.id = 0;
        this.eqpA = 0;
        this.eqpB = 0;
        this.eqpV = 0;
        this.golA = 0;
        this.golB = 0;
        this.puntosA = 0;
        this.puntosB = 0;
        this.observacion = '';
        this.estado = 0;
        this.createdBy = '';
    }
}