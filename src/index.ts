import Cliente from "./Cliente";
import Conta from "./Conta";

import SMS from "./SMS";
import Email from "./Email";
import Aplicativo from "./Aplicativo";

let sms = new SMS();
let email = new Email();
let aplicativo = new Aplicativo();

let cliente1 = new Cliente(
    "Jones Manoel",
    "12345678900",
    "Recife",
    2500,
    sms
);

let cliente2 = new Cliente(
    "Melanie Martinez",
    "98765432100",
    "Recife Antigo",
    3000,
    email
);

let cliente3 = new Cliente(
    "Mapoa",
    "45678912300",
    "Jaboatao",
    4000,
    aplicativo
);

let conta1 = new Conta("001", "0001", "23/11/2026", 500, 1000, cliente1);
let conta2 = new Conta("002", "0001", "23/11/2026", 500, 1000, cliente1);
let conta3 = new Conta("003", "0001", "23/11/2026", 500, 1000, cliente1);

let conta4 = new Conta("004", "0002", "23/11/2026", 100, 200, cliente2);
let conta5 = new Conta("005", "0002", "23/11/2026", 500, 200, cliente2);
let conta6 = new Conta("006", "0002", "23/11/2026", 500, 200, cliente2);

let conta7 = new Conta("007", "0003", "23/11/2026", 1000, 1000, cliente3);
let conta8 = new Conta("008", "0003", "23/11/2026", 500, 1000, cliente3);

function testarSaque(conta: Conta, valor: number): void {

    try {

        conta.sacar(valor);

        console.log(
            "Saque de R$ " + valor.toFixed(2) + " realizado com sucesso!"
        );

        console.log("Saldo atual: R$ " + conta.getSaldo().toFixed(2));

    } catch (erro) {

        if (erro instanceof Error) {

            console.log("Erro: " + erro.message);

            conta.getCliente().notificar(erro.message);

        }

    }

}


//teste 1

console.log("TESTE DE VALORES INVALIDOS");

testarSaque(conta1, -50);
testarSaque(conta1, 0);


//teste 2

console.log("TESTE DE CONTAS BLOQUEADAS");

conta2.bloquear();
conta3.bloquear();

testarSaque(conta2, 50);
testarSaque(conta3, 50);


//teste 3

console.log("TESTE DE SALDO INSUFICIENTE");

testarSaque(conta4, 150);
testarSaque(conta4, 80);


//teste 4

console.log("TESTE DE LIMITE DIARIO");

testarSaque(conta5, 150);
testarSaque(conta5, 100);

testarSaque(conta6, 180);
testarSaque(conta6, 50);

//teste 5
console.log("TESTE DE SAQUES REALIZADOS");

testarSaque(conta7, 100);
testarSaque(conta8, 200);


console.log("CONTAS DOS CLIENTES");

console.log(cliente1.getNome() + ": " + cliente1.getContas().length + " contas");

console.log(cliente2.getNome() + ": " + cliente2.getContas().length + " contas");

console.log(cliente3.getNome() + ": " + cliente3.getContas().length + " contas");