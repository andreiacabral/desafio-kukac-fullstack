import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FieldsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;

    table {
        width: 350px;
        text-align: justify;
    }
`

export const ButtonGenerate =  styled.button`
        margin: 64px 0 64px 0;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: none;
        opacity: 0.9;

        &:hover {
            opacity: 1;
        }
`

export const NumberInput = styled.input`
    border-radius: 4px;
    border: none;
`

export const NumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 100vw;
`

export const NumberContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    
    width: 100vw;
    height: auto;

    padding: 8px
`

export const NumberItem = styled.div`
    color: white;
    width: 100px;
    height: auto;
    padding: 4px;
    font-size: 16px;
    border: solid 1px black;
    margin-bottom: 8px;
    margin-left : 8px;
`