
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-height: 300px;    
    width: 90%;           
    max-width: 600px;
    margin-top: 30px;

    @media (max-width: 768px) {
        max-width: 100%; 
    }
`;

export const Titulo = styled.h1`
    color: black;
    font-family: sans-serif;
    margin: 0px;
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    border-color: grey;
    background-color: rgba(235, 242, 249, 1);
    margin: auto;

    @media (max-width: 768px) {
        margin: auto; 
    }
`;

export const TextBanner = styled.p`
    font-size: 24px;
    margin-right: 10px;
    text-align: center;
    font-family: sans-serif;

    @media (max-width: 400px) {
        font-size: 18px;
        margin-right: 5px;
    }
`;

export const Imagem = styled.img`
    height: 400px;
    width: auto;

    @media (max-width: 400px) {
        height: 250px;
        max-width: 100%;
    }

`;

export const Input = styled.input`
    background-color:  rgba(255, 255, 255, 1);
    height: 40px;
    border: solid;
    border-width: 1px;
    border-radius: 10px;
    padding: 14px;
`;

export const TituloBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`;

export const Linha = styled.div`
    background-color: green;
    width: 50%;
    height: 3px;
`;

export const Sucesso = styled.p`
    color: rgba(0, 119, 86, 1);
    font-family: sans-serif;
`;