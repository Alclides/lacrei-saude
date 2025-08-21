import { render } from "@testing-library/react"
import Header from "../header/Header"
import { screen } from "@testing-library/dom"

test("link para Lacrei Saude Oficail", () => {
    render(<Header/>)
    const linkHome = screen.getByText("Sobre Nos!")
    expect(linkHome).toBeInTheDocument();


})