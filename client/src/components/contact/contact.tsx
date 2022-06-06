import React from "react";
import { ContactDiv } from './styles';
import { rightArrow } from '../../assets'
import api from '../../services/api';
const $ = require('jquery')

let name = ''
let email = ''
let phone = ''
let referrer = ''
let description = ''

async function postMessage(name: string, email: string, phone: string, referrer: string, description: string) {
    try {
        const res = await api.post('contact', {
            'name': name,
            'email': email,
            'phone': phone,
            'referrer': referrer,
            'description': description
        });
        alert('Recebemos sua mensagem!')

    } catch (err) {
        alert('Verifique os dados inseridos no formulário.')
    }
};

const Contact: React.FC = () => {
    return (
            <ContactDiv id="contact">
                <form 
                action="/contact"
                onSubmit = { async (e) => {
                    e.preventDefault()
                    await postMessage(name, email, phone, referrer, description)
                    $('form').submit()
                }} 
                >
                    <strong>Fale com <span>a gente</span></strong>
                    
                    <input type="text" name="name" id="name" placeholder="Nome" required onChange={e => {name = e.target.value}}/>
                    
                    <div className="singleLine">
                        <input type="email" name="email" id="email" placeholder="E-mail" required onChange={e => {email = e.target.value}}/>
                        
                        <input type="number" name="phone" id="phone" placeholder="Telefone" required onChange={e => {phone = `${e.target.value}`}}/>
                    </div>
                    
                    <select name="referrer" defaultValue="" id="referrer" placeholder="Como nos conheceu?" required onChange={e => {referrer = e.target.value}}>
                        <option value="" disabled hidden>Como nos conheceu?</option>
                        <option value="social media">Redes sociais</option>
                        <option value="searching">Pesquisa no Google</option> {/* 'pesquisa na internet? */}
                        <option value="online advertisement">Anúncios online</option>
                        <option value="influencers">Influenciadores</option>
                        <option value="referral">Indicação de conhecidos</option>
                        <option value="another">Outros</option>
                    </select>

                    <input type="text" name="description" id="description" placeholder="Motivo do contato" required onChange={e => {description = e.target.value}}/>
                
                    <button id="formButton">
                        Enviar  
                        <img src={ rightArrow } alt="seta"/>
                    </button>
                </form>
            </ContactDiv>
    );
}

export default Contact;