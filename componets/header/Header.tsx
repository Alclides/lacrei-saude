'use client';
import {Button} from "../Button/Button";
import { HeaderContainer } from "./HeaderStyles";
import Image from 'next/image';



export default function Header() {

    const handleAboutUsClick = () => {
        window.location.href=('https://lacreisaude.com.br/')
    }

    return (
        <HeaderContainer>
            <Image aria-label="Logo da Lacrei Saude"  src="/logo_lacrei_desktop.7ae004ab.svg" alt="Logo-Lacrei-Saude" width={200} height={50}/>
            <Button aria-label="Ir para site da empresa!"  onClick={handleAboutUsClick}> Sobre Nos!</Button>
        </HeaderContainer>
    );
}