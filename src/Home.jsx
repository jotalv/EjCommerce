import Iphonepro from '../public/Iphone16pro.png'
import Iphoneazul from '../public/iphoneazul.png'
import Macbook from '../public/macbookpro.png'
import Button from 'react-bootstrap/Button';

function Home () {

    return (
        <>
        <section className="iphone1">
            <div className='texto'>Iphone 16 Pro</div>
            <div className='botoes'>
            <Button variant="outline-primary" size="lg" style={{ borderRadius: '3.2rem', fontSize: '1rem'}} className='saiba-mais-btn' href='https://www.apple.com/br/iphone-16-pro/'>
                Saiba Mais
            </Button>
            <Button variant='primary' size='lg' style={{borderRadius: '3.2rem', fontSize: '1rem'}} className='botao1' href='https://www.apple.com/br/shop/buy-iphone/iphone-16-pro'>
                Comprar
            </Button>
            </div>
        </section>

        <section className="iphone2">
        <div className='texto1'>Iphone 16</div>
        <div className='botoes'>
            <Button variant="outline-primary" size="lg" style={{ borderRadius: '3.2rem', fontSize: '1rem'}} className='saiba-mais-btn1' href='https://www.apple.com/br/macbook-pro/'>
                Saiba Mais
            </Button>
            <Button variant='primary' size='lg' style={{borderRadius: '3.2rem', fontSize: '1rem'}} className='botao3' href='https://www.apple.com/br/shop/buy-mac/macbook-pro'>
                Ver preços
            </Button>
            
        </div>
        </section>

        <section className="macbook">
        <div className='botoes'>
            <Button variant="outline-primary" size="lg" style={{ borderRadius: '3.2rem', fontSize: '1rem'}} className='saiba-mais-btn' href='https://www.apple.com/br/iphone-16/'>
                Saiba Mais
            </Button>
            <Button variant='primary' size='lg' style={{borderRadius: '3.2rem', fontSize: '1rem'}} className='botao1' href='https://www.apple.com/br/shop/buy-iphone/iphone-16'>
                Comprar
            </Button>
            
        </div>
        <p className='text'>Macbook Pro</p>
        </section>
        
        </>
    )
}

export default Home;