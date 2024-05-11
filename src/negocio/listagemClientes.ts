import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import ListagemRG from "./listagemRG";
import ListandoTelefone from "./listagemTel";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`RGs:`)
            let listagemRG = new ListagemRG(cliente.getRgs)
            listagemRG.listar()
            console.log("Telefone: ")
            let listandoTelefone = new ListandoTelefone(cliente.getTelefones)
            listandoTelefone.listar()

            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}