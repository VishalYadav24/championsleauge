import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { HerosProvider } from "../../context/heroscontext";
import HerosList from "../Heros List/herosList.component";
import WatchList from "../Watchlist/watchlist.component";
import Navbar from "./navbar.component";
describe("<Navbar/>", () => {
  test("should render the navigation bar", () => {
    const navbar = render(<Navbar />, { wrapper: BrowserRouter });
    const title = navbar.getAllByText("Game Store");
    const titleText = within(title[0]).getByText("Game Store");
    expect(titleText).toHaveTextContent("Game Store");
  });
  test("should render the navigation bar", () => {
    const navbar = render(<Navbar />, { wrapper: BrowserRouter });
    const homeIcon = screen.queryAllByRole("button")[0];
    act(() => {
      fireEvent.click(homeIcon);
      const layout = render(
        <HerosProvider>
          <HerosList />
        </HerosProvider>,
        { wrapper: BrowserRouter }
      );
      expect(layout).toBeTruthy();
    });
  });
  test("should render the navigation bar", () => {
    const navbar = render(<Navbar />, { wrapper: BrowserRouter });
    const watchlistIcon = screen.queryAllByRole("button")[1];
    act(() => {
      fireEvent.click(watchlistIcon);
      const watchlist = render(
        <HerosProvider>
          <WatchList />
        </HerosProvider>,
        { wrapper: BrowserRouter }
      );
      expect(watchlist).toBeTruthy();
    });
  });
});
