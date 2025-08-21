'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../../../componets/Button/Button";
import { BoxSucesso, Texto } from "styles/SucessoStyles";
import { Suspense } from "react";

function SucessoContent() {
    const router = useRouter();
    const searchParams: any = useSearchParams();
    const nome = searchParams.get("nome");
    const vaga = searchParams.get("vaga")

    const handleBackClick = () => {
        router.push('/');
    }

    return (
        <BoxSucesso>
            <Texto>Parabéns {nome}!</Texto>
            <Texto>Seu cadastro como voluntário em {vaga} foi feito com sucesso!</Texto>
            <Button aria-label="Voltar para formulário!" onClick={handleBackClick}>
                Voltar Para Formulário!
            </Button>
        </BoxSucesso>
    );
}

export default function SucessoScreen() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <SucessoContent />
        </Suspense>
    );
} 