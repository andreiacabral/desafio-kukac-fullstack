export default class Moto extends Veiculo {
    rodas:number;
    passageiros:number;

    constructor (modelo:string,anoFabricacao:number,quantidadePortas:number,marca:string,passageiros:number) {
        super(modelo,anoFabricacao,marca)
        this.rodas = 2;
        if(passageiros<1 || passageiros>2) {
            throw new Error("out of range");
        }
        this.passageiros = passageiros;
    }

}
