import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import Layout from "./layout.component";
import renderer from "react-test-renderer";



describe("Render Basic Layout of application", ()=>{
    test("<Layout/>",()=>{
        const layout = render(<Layout/>,{wrapper:BrowserRouter});
        expect(screen.getAllByTestId('layout')[0]).toBeInTheDocument();
    });

    test("<Layout/>Snapshot", () => {
        const layout = renderer
          .create(
            <BrowserRouter>
              <Layout  />
            </BrowserRouter>
          )
          .toJSON();
        expect(layout).toMatchSnapshot();
      });
})