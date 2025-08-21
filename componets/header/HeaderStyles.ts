
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to bottom, #f5FFFB, #FFFFFF);
  padding: 28px;

  @media (max-width: 400px) {
     gap: 10px;
     justify-content: center;
      padding: 10px;
  }
`;

