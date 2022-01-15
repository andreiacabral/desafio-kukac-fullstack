export default class Carro extends Veiculo {
    quantidadePortas: number;

    constructor(modelo: string, anoFabricacao: number, quantidadePortas: number, marca: string) {
        super(modelo, anoFabricacao, marca)
        if(quantidadePortas<2 || quantidadePortas>4){
         throw new Error("out of range");
        }
        this.quantidadePortas = quantidadePortas;
       
    }

}