import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const ValueInput = styled.input`
    border-radius: 4px;
    border: none;
`

export const Table = styled.table`
        width: 300px;

        &, th, td {
            border: 1px solid white;
            border-collapse: collapse;
            padding: 8px;
          }
`