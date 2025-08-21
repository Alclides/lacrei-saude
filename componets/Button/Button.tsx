'use client'
 import styled from "styled-components";

export const Button = styled.button`
  padding: 8px;
  height: 40px;
  width: auto;
  background-color: rgba(1, 135, 98, 1);
  border-radius: 10px;
  border-width: 0px;
  color: white;
  cursor: pointer;

  
    &:hover{
        background-color: rgba(0, 119, 86, 1);
    }

    &:active{
        background-color: rgba(1, 76, 55, 1);
    }

`;


