import type Cliente from "./Cliente";

import ValorInvalidoException from "./ValorInvalidoException";
import ContaBloqueadaException from "./ContaBloqueadaException";
import SaldoInsuficienteException from "./SaldoInsuficienteException";
import LimiteDiarioExcedidoException from "./LimiteDiarioExcedidoException";

export default class Conta {

    private numero: string;
    private agencia: string;
    private dataAbertura: string;
    private saldo: number;
    private bloqueada: boolean;
    private limiteDiario: number;
    private totalSacadoDia: number;
    private cliente: Cliente;

    constructor(numero: string, agencia: string,
        dataAbertura: string, saldo: number,
        limiteDiario: number, cliente: Cliente) {

        this.numero = numero;
        this.agencia = agencia;
        this.dataAbertura = dataAbertura;
        this.saldo = saldo;
        this.limiteDiario = limiteDiario;
        this.bloqueada = false;
        this.totalSacadoDia = 0;
        this.cliente = cliente;

        this.cliente.adicionarConta(this);
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    getCliente(): Cliente {
        return this.cliente;
    }

    setCliente(cliente: Cliente): void {
        this.cliente = cliente;
        this.cliente.adicionarConta(this);
    }

    bloquear(): void {
        this.bloqueada = true;
    }

    desbloquear(): void {
        this.bloqueada = false;
    }

    sacar(valor: number): void {

        if (isNaN(valor) || valor <= 0) {
            throw new ValorInvalidoException(
                "O valor do saque é inválido."
            );
        }

        if (this.bloqueada) {
            throw new ContaBloqueadaException(
                "A conta está bloqueada."
            );
        }

        if (valor > this.saldo) {

            let falta = valor - this.saldo;

            throw new SaldoInsuficienteException(
                falta
            );

        }

        if (this.totalSacadoDia + valor > this.limiteDiario) {
            throw new LimiteDiarioExcedidoException(
                "O limite diário de saque foi excedido."
            );
        }

        this.saldo = this.saldo - valor;
        this.totalSacadoDia = this.totalSacadoDia + valor;

    }

}