import React, { useState } from "react";
import { Alert, Button, Card, CardBody, CardFooter, CardHeader, Col, Form, Row } from "react-bootstrap";
import CepFormDadosComponent from "./CepFormDadosComponent";
import axios from "axios";

function CepFormComponent(){
    const [cep, setCep] = useState(null)
    const [dadosCep, setDadosCep] = useState(null)
    const [erro, setErro] = useState(null)
    const [sucesso, setSucesso] = useState(null)
    const [carregando, setCarregando] = useState(false)

    const buscarCep = async (formulario) => {  
        formulario.preventDefault();

        setSucesso(null);
        setErro(null);

       try{

        setCarregando(true);
        
        let resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        
        setDadosCep(resposta.data);

        setSucesso(`${cep} - Localizado com Sucesso`)
       }catch(erro){
        console.log(erro)
        setErro(`${cep} - Erro ao pesquisar cep, insira um cep válido`)
       }finally{
        setCarregando(false);
       }
        
    }

    return (
        <Form onSubmit={buscarCep} >
            <Row className="justify-content-center">
                <Col sm={12} md={6} lg={4}>
                    <Card >
                        
                        <CardHeader className="p-2 pb-0"><h4>Buscar Cep</h4></CardHeader>
                        <CardBody>
                            
                            <Form.Control 
                                type="text" 
                                placeholder="Digite o cep a ser consultado" 
                                onChange={(cep) => setCep(cep.target.value)}
                            />

                        </CardBody>
                        <CardFooter className="text-end">
                            
                            <Button type="button" onClick={() => {
                                setDadosCep(null)
                                setSucesso(null)
                                setErro(null)
                            }} variant="warning" className="me-1">Limpar</Button>
                            <Button type="submit">Consultar</Button>
                        </CardFooter>

                    </Card>
                    
                    {carregando &&
                        <Alert className="mt-2" variant="info" key="info">
                            <b>Aguarde, carregando...</b>
                            </Alert>
                    }
                    
                    {erro &&
                        <Alert className="mt-2" variant="danger" key="danger"><b>{erro}</b></Alert>
                    }
                    
                    {sucesso &&
                        <Alert className="mt-2" variant="success" key="success"><b>{sucesso}</b></Alert>
                    }
                    
                    {dadosCep &&
                        <CepFormDadosComponent dadosCep={dadosCep} />
                    }

                </Col>
            </Row>   
        </Form>
    );
}

export default CepFormComponent;