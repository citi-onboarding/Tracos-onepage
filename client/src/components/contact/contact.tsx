import React from "react";
import { ContactDiv } from './styles';

export const Contact: React.FC = () => {
    return (
            <ContactDiv>
                <form action="" method="post">
                    <strong>Fale com a gente</strong>
                    <input type="text" name="name" id="name"/>
                    <input type="email" name="" id="" />
                </form>
            </ContactDiv>
    );
}