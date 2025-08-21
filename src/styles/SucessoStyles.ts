import styled from "styled-components";



export const BoxSucesso = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 60px 50px;
    text-align: center;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    @media (max-width: 768px) {
            padding: 40px 30px;

        }


`;

export const Texto = styled.h1`
    font-family: sans-serif;
    text-align: center;
    margin-bottom: 50px;
    font-size: 28px;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 16px;
    line-height: 1.3;

    @media (max-width: 500px) {
        height: 100px;
        width: auto;
        
    }
`;