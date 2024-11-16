import CepPage from "../meu-projeto/src/pages/CepPage";

function Carrinho () {
    return (
        <>
        <section className="cart-section">
            <div className="carrinho">
                <h2>Digite seu CEP para iniciar!</h2>
            </div>
            <CepPage />
                {/* <h4 className="cart-desc">Você precisa validar seu endereço antes de adquirir produtos da nossa loja!</h4> */}
        </section>
        </>
    )
}

export default Carrinho;