import React from "react";
import { ContactDiv } from './styles';
import { rightArrow } from '../../assets'

const Contact: React.FC = () => {
    return (
            <ContactDiv id="contact">
                <form action="/contact" method="post">
                    <strong>Fale com <span>a gente</span></strong>
                    
                    <input type="text" name="name" id="name" placeholder="Nome" required/>
                    
                    <div className="singleLine">
                        <input type="email" name="email" id="email" placeholder="E-mail" required/>
                        
                        <input type="number" name="phone" id="phone" placeholder="Telefone" required/>
                    </div>
                    
                    <select name="referrer" id="referrer" placeholder="Como nos conheceu?" required>
                        <option value="" disabled selected hidden>Como nos conheceu?</option>
                        <option value="social media">Redes sociais</option>
                        <option value="searching">Pesquisa no Google</option> {/* 'pesquisa na internet? */}
                        <option value="online">Anúncios online</option>
                        <option value="influencers">Influenciadores</option>
                        <option value="referral">Indicação de conhecidos</option>
                        <option value="another">Outros</option>
                    </select>

                    <input type="text" name="description" id="description" placeholder="Motivo do contato" required/>
                
                    <button id="formButton">
                        Enviar  
                        <img src={ rightArrow } alt="seta"/>
                    </button>
                </form>
            </ContactDiv>
    );
}

export default Contact;