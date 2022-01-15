import Carro from "../entities/carro";
import Moto from "../entities/moto";
import { readFile, writeFile } from "fs";

export function guardarVeiculo(veiculo: Carro | Moto) {

    const veiculos: (Carro | Moto)[] = []
    readFile('./src/dados.json', 'utf-8', (error, data) => {
        if (error) {
            console.error(error)
        } else {
            const veiculos: (Carro | Moto)[] = JSON.parse(data)
            veiculos.push(veiculo);
            writeFile('./src/dados.json', JSON.stringify(veiculos), (error) => {
                if (error) {
                    console.error(error)
                } else {

                    console.info("veiculo salvo")
                }
            })
        }
    })
}

