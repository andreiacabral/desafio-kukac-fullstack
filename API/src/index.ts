import axios from 'axios';
import express, { json, response } from 'express';
import cors from 'cors';
import {palindromesFromRange} from './services/exerciseOne';
import { guardarVeiculo } from './services/exerciseThree';
import {minimumMoneyBillChange} from './services/exerciseTwo';



const server = express();
server.use(json());
server.use(cors())
server.get('/palindrome',(req,res)=>{
    const {from,to} = req.query
    res.status(200).json(palindromesFromRange(Number(from) ,Number(to)))
});

server.get('/cashier',(req,res)=>{
    const {purchaseValue,givenValue} = req.query
    res.status(200).json(minimumMoneyBillChange(Number(purchaseValue) ,Number(givenValue)))
});

server.post('/save',(req,res)=>{
    res.status(200).json(guardarVeiculo(req.body))
});

server.post('/cep',async(req,res)=>{
    console.log(req.body)
    const ceps : string[] = req.body
    const cepResponses: any[] =[]

    for(const cep of ceps){
        cepResponses.push((await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data)
    }
    res.status(200).json(cepResponses)
});

server.listen(3001,()=>console.info('server is up'))