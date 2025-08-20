'use client';
import styled from "styled-components";
import Button from "../Button/Button";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #f5FFFB, #FFFFFF);
  padding: 28px;

  @media (max-width: 400px) {
     gap: 10px;
     justify-content: center;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;

  @media (max-width: 745px) {
    max-width: 142px;
  }
`;

export default function Header() {

    const handleAboutUsClick = () => {
        window.location.href=('https://lacreisaude.com.br/')
    }

    return (
        <HeaderContainer>
            <Logo src="/logo_lacrei_desktop.7ae004ab.svg" />
            <Button onClick={handleAboutUsClick}> Sobre Nos!</Button>
        </HeaderContainer>
    );
}