import { render, screen, waitFor } from "@testing-library/react";
import Voluntario from "./Voluntario";
import userEvent from "@testing-library/user-event"
import * as nextNavigation from 'next/navigation'


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

beforeAll(() => {
    global.fetch = jest.fn((url, options) =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ message: "Cadastrado com sucesso!" }),
        } as Response)
    )
})


afterAll(() => {
    jest.resetAllMocks()
})

test("redireciona para outra rota ao enviar o formulário", async () => {
    const pushMock = jest.fn();
    (nextNavigation.useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<Voluntario />);

    const nome = screen.getByPlaceholderText("Digite seu Nome!");
    const email = screen.getByPlaceholderText("Digite seu Email");
    const vaga = screen.getByPlaceholderText("Vaga desejada: ex: FrontEnd");
    const botao = screen.getByRole("button", { name: /enviar/i });

    await userEvent.type(nome, "Alclides");
    await userEvent.type(email, "Alclides@gmail.com");
    await userEvent.type(vaga, "Backend");

    await userEvent.click(botao);

    await waitFor(() => {
        expect(pushMock).toHaveBeenCalledWith(
            expect.stringContaining("/sucesso")
        );
    });
});
