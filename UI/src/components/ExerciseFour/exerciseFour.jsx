import React, { useState } from 'react';
import axios from 'axios';
import { Container, FieldsContent, ValueInput, ButtonGenerate, Table } from './style'

const ExerciseFour = () => {
    const [cepValue,setCepValue]=useState('')  
    const [ceps,setCeps]=useState([])
    const [cepData,setCepData]=useState([{}])
  
    function handleRequest() {
      axios.post(`http://localhost:3001/cep`, ceps)
      .then(response => setCepData(response.data))
    }

    function handleAddCep(){
      setCeps([...ceps, cepValue.trim().replace('-','')])
    }
  
    function handleCepValue(event) {
      setCepValue(event.target.value)
    }
   
    return (
      <Container>
      <FieldsContent>
            <table>
              <tr>
                <td><span>Cep para buscar: </span></td>
                <td>
                  <ValueInput 
                    type="text"
                    value={cepValue}
                    onChange={handleCepValue}
                  />
                </td>
              </tr>
            </table>
            <ButtonGenerate onClick={handleAddCep}>Adicionar CEP</ButtonGenerate>
            <h1>CEPs para buscar</h1>
            <ul>{ ceps.map(cep => <li>{cep}</li>) }</ul>
            <ButtonGenerate onClick={handleRequest}>Buscar CEPs</ButtonGenerate>
      </FieldsContent>
      <Table border="1">
        <thead>
          <tr>
            <td>CEP</td>
            <td>Logradouro</td>
            <td>Complemento</td>
            <td>Bairro</td>
            <td>Localidade</td>
            <td>UF</td>
            <td>IBGE</td>
            <td>GIA</td>
            <td>DDD</td>
            <td>SIAFI</td>
          </tr> 
        </thead>
        <tbody>
          {
            cepData.map(cep => 
              <tr>
                <td>{cep.cep}</td>
                <td>{cep.logradouro}</td>
                <td>{cep.complemento}</td>
                <td>{cep.bairro}</td>
                <td>{cep.localidade}</td>
                <td>{cep.uf}</td>
                <td>{cep.ibge}</td>
                <td>{cep.gia}</td>
                <td>{cep.ddd}</td>
                <td>{cep.siafi}</td>
              </tr> 
            )
          }
        </tbody>
      </Table>
      </Container>
    )
  }

  export default ExerciseFour;