import React, { useState } from 'react';
import axios from 'axios';
import { Container, FieldsContent, ValueInput, ButtonGenerate, Table } from './style'

const ExerciseTwo = () => {
    const [bills,setBills]=useState({})
    const [purchaseValue,setPurchaseValue]=useState(0)
    const [paymentValue,setPaymentValue]=useState(0)
  
    function handleClick() {
      axios.get(`http://localhost:3001/cashier?purchaseValue=${purchaseValue}&givenValue=${paymentValue}`)
      .then(response => setBills(response.data))
      
    }
  
    function handlePurchaseValue(event) {
      setPurchaseValue(event.target.value)
    }
  
    function handlePaymentValue(event) {
      setPaymentValue(event.target.value)
    }
   
    return (
      <Container>
      <FieldsContent>
            <table>
              <tr>
                <td><span>Valor da compra: </span></td>
                <td>
                  <ValueInput 
                    type="text"
                    value={purchaseValue}
                    onChange={handlePurchaseValue}
                  />
                </td>
              </tr>
              <tr>
                <td><span>Valor recebido: </span></td>
                <td>
                  <ValueInput 
                    type="text" 
                    value={paymentValue}
                    onChange={handlePaymentValue}
                  />
                </td>
              </tr>
            </table>
          <ButtonGenerate onClick={handleClick}>Gerar números</ButtonGenerate>
      </FieldsContent>
      <Table>
        <thead>
        <tr>
          <td>Nota</td>
          <td>Quantidade</td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>R$1</td>
            <td>
              {
                bills.amountOfOneBills?bills.amountOfOneBills:0
              }
            </td>
          </tr>
          <tr>
            <td>R$10</td>
            <td>
              {
                bills.amountOfTenBills?bills.amountOfTenBills:0
              }
            </td>
          </tr>
          <tr>
            <td>R$100</td>
            <td>
              {
                bills.amountOfHundredBills?bills.amountOfHundredBills:0
              }
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total de notas</td>
            <td>
              {
                bills.amountOfBills?bills.amountOfBills:0
              }
            </td>
          </tr>
          <tr>
            <td>Valor da compra</td>
            <td>
              {
                bills.purchaseValue?bills.purchaseValue:0
              }
            </td>
          </tr>
          <tr>
            <td>Troco</td>
            <td>
              {
                bills.totalChange?bills.totalChange:0
              }
            </td>
          </tr>
        </tfoot>
      </Table>
      </Container>
    )
  }

  export default ExerciseTwo;