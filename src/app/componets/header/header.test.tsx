import React from "react"
import { render, screen } from "@testing-library/react"
import Header from "./Header"

test('Deve renderizar a Logo', () => {
     render(<Header/>)
    const logo = screen.getByAltText("Logo-Lacrei-Saude")
    expect(logo).toBeInTheDocument();
    });