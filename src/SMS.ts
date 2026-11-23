import CanalNotificacao from "./CanalNotificacao";

export default class SMS implements CanalNotificacao {

    enviarMensagem(nomeCliente: string, mensagem: string): void {

        console.log("Enviando SMS para " + nomeCliente);
        console.log("Mensagem: " + mensagem);

    }

}