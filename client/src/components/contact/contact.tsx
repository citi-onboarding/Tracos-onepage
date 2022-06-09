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
                    <strong><div>Fale com <span>a gente</span></div></strong>
                    
                    <input type="text" name="name" id="name" placeholder="Nome" required onChange={e => {name = e.target.value}}/>
                    
                    <div className="singleLine">
                        <input type="email" name="email" id="email" placeholder="E-mail" required onChange={e => {email = e.target.value}}/>
                        
                        <input type="number" name="phone" id="phone" placeholder="Telefone" required onChange={e => {phone = `${e.target.value}`}}/>
                    </div>
                    
                    <select name="referrer" defaultValue="" id="referrer" placeholder="Como nos conheceu?" required onChange={e => {referrer = e.target.value}}>
                        <option value="" disabled hidden>Como nos conheceu?</option>
                        <option value="Redes Sociais">Redes sociais</option>
                        <option value="Pesquisa no Google">Pesquisa no Google</option> {/* 'pesquisa na internet? */}
                        <option value="Anúncios Online">Anúncios online</option>
                        <option value="Influenciadores">Influenciadores</option>
                        <option value="Indicação de Conhecidos">Indicação de conhecidos</option>
                        <option value="Outros">Outros</option>
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