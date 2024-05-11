import Entrada from "../io/entrada";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroTel extends Cadastro {
    private telefones: Array<Telefone>
    private entrada: Entrada
    constructor(telefones: Array<Telefone>) {
        super()
        this.telefones = telefones
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        let telefone: Telefone
        let ddd = this.entrada.receberTexto(`Informe o seu DDD: `)
        if (ddd = ``) {
            console.log("DDD não é válido")
            return 
        }
        let numero = this.entrada.receberTexto(`Informe o seu número de telefone: `)
        if (numero = ``) {
            console.log("Número inválido")
            return
        }
        telefone = new Telefone(ddd, numero)
        this.telefones.push(telefone)
    }
    }
