
import { useState } from "react";
import styled from "styled-components";
import {Button} from "../Button/Button";
import { VoluntarioProps } from "../../../../types/voluntario.types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Formulario = styled.form`
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

const Titulo = styled.h1`
    color: black;
    font-family: sans-serif;
    margin: 0px;
`;

const Banner = styled.div`
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

const TextBanner = styled.p`
    font-size: 24px;
    margin-right: 10px;
    text-align: center;
    font-family: sans-serif;

    @media (max-width: 400px) {
        font-size: 18px;
        margin-right: 5px;
    }
`;

const Imagem = styled.img`
    height: 400px;
    width: auto;

    @media (max-width: 400px) {
        height: 250px;
        max-width: 100%;
    }

`;

const Input = styled.input`
    background-color:  rgba(255, 255, 255, 1);
    height: 40px;
    border: solid;
    border-width: 1px;
    border-radius: 10px;
    padding: 14px;
`;

const TituloBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`;

const Linha = styled.div`
    background-color: green;
    width: 50%;
    height: 3px;
`;

const Sucesso = styled.p`
    color: rgba(0, 119, 86, 1);
    font-family: sans-serif;
`;

export default function Voluntario({onSubmit}: VoluntarioProps) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [vaga, setVaga] = useState('')
    const [mensagem, setMensagem] = useState("")


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(onSubmit) {
            onSubmit({name, email, vaga})
        }
        setMensagem(`Parabéns ${name}, você foi cadastrade!`)

        
        alert(`Parabens ${name}, você foi cadastrade!`)
    }

    return (
        <Container>
            <TituloBox>
                
                <Titulo>Seja um Voluntariado!</Titulo>
                <Linha></Linha>
            </TituloBox>
            <Banner>
                <Imagem src={'/menina-feliz-estudante.png'} alt="Menina feliz estudante" />
                <TextBanner>Venha fazer parte do progama de Voluntários e faça a diferença usando tecnologia! </TextBanner>
            </Banner>
            <Sucesso>{mensagem}</Sucesso>
            <Formulario onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Digite seu Nome!"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input
                    type="email"
                    placeholder="Digite seu Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <Input
                    type="text"
                    placeholder="Vaga desejada: ex: FrontEnd"
                    onChange={(e) => setVaga(e.target.value)}
                    value={vaga}
                />
                <Button type="submit">Enviar</Button>
            </Formulario>
        </Container>
    )
}
