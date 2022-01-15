import React, { useState } from 'react';
import axios from 'axios';
import { Container, FieldsContent, NumberInput, ButtonGenerate, NumberContainer, NumberContent, NumberItem } from './style'

const ExerciseOne = () => {
  const [palindromes,setPalindromes]=useState([])
  const [palindromesFrom,setPalindromesFrom]=useState('')
  const [palindromesTo,setPalindromesTo]=useState('')

  function handleClick() {
    axios.get(`http://localhost:3001/palindrome?from=${palindromesFrom}&to=${palindromesTo}`)
    .then(response => setPalindromes(response.data))
    
  }

  function handlePalindromesFrom(event) {
    setPalindromesFrom(event.target.value)
  }

  function handlePalindromesTo(event) {
    setPalindromesTo(event.target.value)
  }
 
  return (
    <Container>
    <FieldsContent>
          <table>
            <tr>
              <td><span>Primeiro número: </span></td>
              <td>
                <NumberInput 
                  type="text"
                  value={palindromesFrom}
                  onChange={handlePalindromesFrom}
                />
              </td>
            </tr>
            <tr>
              <td><span>Último número: </span></td>
              <td>
                <NumberInput 
                  type="text" 
                  value={palindromesTo}
                  onChange={handlePalindromesTo}
                />
              </td>
            </tr>
          </table>
        <ButtonGenerate onClick={handleClick}>Gerar números</ButtonGenerate>
    </FieldsContent>
    <NumberContainer>
      <NumberContent>
        {
          palindromes.map(palindrome => <NumberItem>{palindrome}</NumberItem>)
        }
        
      </NumberContent>
    </NumberContainer>
    </Container>
  )
}

export default ExerciseOne;