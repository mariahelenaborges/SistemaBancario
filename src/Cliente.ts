import type Conta from "./Conta";
import type CanalNotificacao from "./CanalNotificacao";

export default class Cliente {

    private nome: string;
    private cpf: string;
    private endereco: string;
    private renda: number;
    private canal: CanalNotificacao;
    private contas: Conta[];

    constructor(nome: string, cpf: string, endereco: string,
        renda: number, canal: CanalNotificacao) {

        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.renda = renda;
        this.canal = canal;
        this.contas = [];

    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    getCpf(): string {
        return this.cpf;
    }

    setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    getContas(): Conta[] {
        return this.contas;
    }

    setContas(contas: Conta[]): void {
        this.contas = contas;
    }

    notificar(mensagem: string): void {
        this.canal.enviarMensagem(this.nome, mensagem);
    }

    alterarCanal(canal: CanalNotificacao): void {
        this.canal = canal;
    }

}