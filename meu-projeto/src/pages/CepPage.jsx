import React from "react";
import CepFormComponent from "../components/CepFormComponent";
import { Container } from "react-bootstrap";
import '../../../src/index.css'

function CepPage(){
    return (
        <>
            <Container className="cep">
                <CepFormComponent />
            </Container>
            
        </>
    );
}

export default CepPage;