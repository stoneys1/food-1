import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p>A Stoneys Fina Comida oferece uma culinária refinada e diversificada, destacando-se pela qualidade dos ingredientes e técnicas culinárias. Nosso cardápio combina inovação e tradição, proporcionando experiências gastronômicas memoráveis. Priorizamos a satisfação do cliente, oferecendo um serviço acolhedor e atencioso</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="foot-content-center">
                <h2>Empresa</h2>
                <ul>
                    <li> Inicio</li>
                    <li> Sobre nós</li>
                    <li> Delivery</li>
                    <li> Politica de privacidade</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Entre em contato</h2>
                <ul>
                    <li>11 9-6332-8131</li>
                    <li>malvesbonacina@yahoo.com.br</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright © Stoneys.com - Todos os direitos reservados.</p>
    </div>
  )
}

export default Footer