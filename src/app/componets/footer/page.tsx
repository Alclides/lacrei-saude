import styled from "styled-components"

const Footer = styled.div`
    width: 375px;
    height: 409px;
    top: 20px;
    left: 20px;
    background: linear-gradient(to right, #f5FFFB, #FFFFFF);
`;


export default function FooterComponent() {
    return (

        <Footer>

            <div>
                <p>Quem Somos Nós</p>
                <p>Lacrei Saude</p>
                <p>Politícas de Privacidade</p>
                <p>Termos de Uso</p>
            </div>

            <div>
                <p>Social</p>
            </div>
        </Footer>

    )

}