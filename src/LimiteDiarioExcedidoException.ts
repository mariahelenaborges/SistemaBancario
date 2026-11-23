export default class LimiteDiarioExcedidoException extends Error {

    constructor(mensagem: string) {

        super(mensagem);

        this.name = "LimiteDiarioExcedidoException";

    }

}