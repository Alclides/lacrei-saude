
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%; 
  min-height: 100%;
  margin-top:10px;
  background: linear-gradient(to right, #f5fffb, #ffffff);
  margin-bottom: 20px;

  .linha-footer {
    background-color: green;
    width: 90%;
    height: 3px;
    margin-bottom: 20px;
    opacity: 0.1; 
  }

  .sobre-box {
    display: flex;
    gap: 50px;
    justify-content: center;
    flex-wrap: wrap; 
    text-align: center;
  }

  .coluna {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p, a {
      margin: 0;
      font-size: 14px;
      color: #333;
      cursor: pointer;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .logo-footer {
    height: 100px;
    width: auto;

    @media (max-width: 600px) {
        height: 70px;
    }
  }
`;

export default function Footer() {
    return (
        <FooterContainer>
            <div className="linha-footer" />
            <div className="sobre-box">
                <div className="coluna">
                    <img className="logo-footer" src={'/Avatar_Redes_Sociais.webp'} alt="Logo Lacrei" />
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
