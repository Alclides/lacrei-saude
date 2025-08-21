
import Image from 'next/image';
import { FooterContainer } from "./FooterStyled";



export default function Footer() {
    return (
        <FooterContainer>
            <div className="linha-footer" />
            <div className="sobre-box">
                <div className="coluna">
                    <Image className="logo-footer" src={'/Avatar_Redes_Sociais.webp'} alt="Logo Lacrei" width={100} height={100} />
                </div>
                <div className="coluna">
                    <p>Quem Somos Nós</p>
                    <p>Lacrei Saúde</p>
                    <p>Políticas de Privacidade</p>
                    <p>Termos de Uso</p>
                </div>
                <div className="coluna">
                    <p>Social</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <a href="https://www.linkedin.com/company/lacreisaude/">LinkedIn</a>
                </div>
            </div>
        </FooterContainer>
    );
}
