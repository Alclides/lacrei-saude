'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../../../componets/Button/Button";
import { BoxSucesso, Texto } from "styles/SucessoStyles";






export default function SucessoScreen() {
    const router = useRouter();
    const searchParams: any = useSearchParams();
    const nome = searchParams.get("nome")

    


    const handleBackClick = () => {

        router.push('/')

    }

    return (


        
        <BoxSucesso>
            <Texto>Parabéns {nome}!</Texto>
            <Texto> Seu candastro como voluntario foi feito com sucesso!</Texto>
            <Button aria-label="Voltar para formúlario!" onClick={handleBackClick}>Voltar Para Formulario!</Button>
        </BoxSucesso>
        
    )
}