import CanalNotificacao from "./CanalNotificacao";

export default class Aplicativo implements CanalNotificacao {

    enviarMensagem(nomeCliente: string, mensagem: string): void {

        console.log("Notificação no aplicativo de " + nomeCliente);
        console.log("Notificação: " + mensagem);

    }

}