import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout.component";



describe("Render Basic Layout of application", ()=>{
    test("<Layout/>",()=>{
        const layout = render(<Layout/>,{wrapper:BrowserRouter});
        expect(screen.getAllByTestId('layout')[0]).toBeInTheDocument();
    })
})