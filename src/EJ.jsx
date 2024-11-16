import { Button } from "react-bootstrap";

function Ej () {
    return(
        <>
            <section className="ej-section">
                <div className="ej">
                    <div className="logo-ej">
                        <img src="./public/EJ_logo.png" className="ej-logo" />
                    </div>
                    <h3 className="ej-text">Bem vindo(a) a EJ Commerce!</h3>
                    <p className="ej-text1">A melhor revendedora de dispositivos Apple do mercado!</p>
                    <div className="ej-botoes">
                        <Button variant="outline-light" size="lg" style={{ borderRadius: '3.2rem', fontSize: '1rem'}} className="ej-botao1" href="/loja">Comece a comprar!</Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ej;