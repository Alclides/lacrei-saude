import { render, screen, waitFor } from "@testing-library/react";
import Voluntario from "./Voluntario";
import userEvent from "@testing-library/user-event"


beforeAll(() => {
    window.alert = jest.fn();
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

test("deve enviar o formulario chamando a função HandSubmit", async () => {

    const handleSubimt = jest.fn();
    render(<Voluntario onSubmit={handleSubimt} />);


    const nome = screen.getByPlaceholderText("Digite seu Nome!")
    const email = screen.getByPlaceholderText("Digite seu Email")
    const vaga = screen.getByPlaceholderText("Vaga desejada: ex: FrontEnd")

    await userEvent.type(nome, "Alclides");
    await userEvent.type(email, "Alclides@gmail.com")
    await userEvent.type(vaga, "Backend")


    const botao = screen.getByRole("button", { name: /enviar/i })
    await userEvent.click(botao)

    expect(handleSubimt).toHaveBeenCalledWith({
        name: "Alclides",
        email: "Alclides@gmail.com",
        vaga: "Backend"
    })

     await waitFor(() =>
    expect(
      screen.getByText(/parabéns alclides, você foi cadastrade!/i)
    ).toBeInTheDocument()
  )
    expect(window.alert).toHaveBeenCalledWith("Parabens Alclides, você foi cadastrade!")

})