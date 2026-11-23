import CanalNotificacao from "./CanalNotificacao";

export default class Email implements CanalNotificacao {

    enviarMensagem(nomeCliente: string, mensagem: string): void {

        console.log("Enviando e-mail para " + nomeCliente);
        console.log("Conteúdo do e-mail: " + mensagem);

    }

}