import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Loader from "./loader.component";




describe("Render Loader", ()=>{
    test("<Loader/>",()=>{
        const loader = render(<Loader variant="indeterminate" />,{wrapper:BrowserRouter});
        expect(screen.getByTestId("loader")).toBeInTheDocument();
       
    })
})