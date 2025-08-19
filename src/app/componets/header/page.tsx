import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: linear-gradient(to bottom, #f5FFFB, #FFFFFF);

  @media (max-width: 745px) {
    padding: 16px;
  }
`;

const Logo = styled.img`
  width: 200px;

  @media (max-width: 745px) {
    max-width: 142px;
    max-height: 48px;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  height: 40px;
  width: auto;
  background-color: rgba(0, 119, 86, 1);
  border-radius: 10px;
  border-width: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export default function HeaderScreen() {
    const handclckevent = () => {
        alert('Indo')
    }
  return (
    <Header>
      <Logo src="logo_lacrei_desktop.7ae004ab.svg" />
      <Button onClick={handclckevent}>Página sobre nós! </Button>
    </Header>
  );
}
