export default class SaldoInsuficienteException extends Error {

    private quantoFalta: number;

    constructor(quantoFalta: number) {

        super("Saldo insuficiente! Faltam R$ " + quantoFalta.toFixed(2));

        this.name = "SaldoInsuficienteException";

        this.quantoFalta = quantoFalta;

    }

    getQuantoFalta(): number {

        return this.quantoFalta;

    }

    setQuantoFalta(quantoFalta: number): void {

        this.quantoFalta = quantoFalta;

    }

}