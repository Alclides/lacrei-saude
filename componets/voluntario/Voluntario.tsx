'use client'
import { Banner, Container, Formulario, Imagem, Input, Linha, Sucesso, TextBanner, Titulo, TituloBox, } from './VoluntarioStyles'
import { useState } from "react";
import { Button } from "../Button/Button";
import { VoluntarioProps } from "../../types/voluntario.types";



export default function Voluntario({ onSubmit }: VoluntarioProps) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [vaga, setVaga] = useState('')
    const [mensagem, setMensagem] = useState("")


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ name, email, vaga })
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
                <Imagem src={'/mulher_banner.png'} alt="Menina feliz estudante" />
                <TextBanner>Venha fazer parte do progama de Voluntários e faça a diferença usando tecnologia! </TextBanner>
            </Banner>
            <Sucesso>{mensagem}</Sucesso>
            <Formulario onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Digite seu Nome!"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <Input
                    type="email"
                    placeholder="Digite seu Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <Input
                    type="text"
                    placeholder="Vaga desejada: ex: FrontEnd"
                    onChange={(e) => setVaga(e.target.value)}
                    value={vaga}
                    required
                />
                <Button type="submit">Enviar</Button>
            </Formulario>
        </Container>
    )
}
