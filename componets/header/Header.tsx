'use client';
import {Button} from "../Button/Button";
import { HeaderContainer, Logolacrei } from "./HeaderStyles";



export default function Header() {

    const handleAboutUsClick = () => {
        window.location.href=('https://lacreisaude.com.br/')
    }

    return (
        <HeaderContainer>
            <Logolacrei src="/logo_lacrei_desktop.7ae004ab.svg" alt="Logo-Lacrei-Saude"/>
            <Button onClick={handleAboutUsClick}> Sobre Nos!</Button>
        </HeaderContainer>
    );
}