import RG from "../modelo/rg";
import Delete from "./deletar";

export default class DeleteRg extends Delete {
    private rg: Array<RG>
    private identidade: string
    constructor(rg: Array<RG>, identidade: string) {
        super()
        this.rg = rg
        this.identidade = identidade
    }
    public delete(): void {
        let rg:RG|undefined = this.rg.find(rg => rg.getValor === this.identidade)
        if(!rg) {
            console.log(`\nRG não encontrado :( \n`)
            return
        }
        let indice = this.rg.indexOf(rg)
        this.rg.splice(indice, 1)
    }
}