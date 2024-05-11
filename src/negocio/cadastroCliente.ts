import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Cadastro from "./cadastro"
import CadastroRG from "./CadastroRG"


export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);


        let rgs: Array<RG> = []
        let escolhaRg = this.entrada.receberTexto(`Deseja registrar o RG? (s/n): `)
        if(escolhaRg.toLocaleLowerCase() == "s") {
            while (true) {
                let guardadarRg = new CadastroRG(rgs)
                guardadarRg.cadastrar()
                let continuar = this.entrada.receberTexto(`Deseja continuar cadastrando RG? (s/n): `)
                if(continuar.toLocaleLowerCase() == "n") {
                    break
                }
            }
        }













        let cliente = new Cliente(nome, nomeSocial, cpf);
        cliente.setRgs = rgs






        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}