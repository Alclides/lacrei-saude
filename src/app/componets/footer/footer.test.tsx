import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

test("Deve renderizar o footer", () => {

    render(<Footer/>)
    const Logo = screen.getByAltText("Logo Lacrei")
    expect(Logo).toBeInTheDocument();
})