import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { useContext } from "react";
import { HerosContext, HerosProvider } from "../../context/heroscontext";
import renderer from "react-test-renderer";
import TableContent from "./TableContent.component";
describe("Table Content", () => {
  const headerCells = [
    "id",
    "image_url",
    "name",
    "hp",
    "armor",
    "attackdamage",
    "attackrange",
    "hpregen",
    "spellblock",
  ];
  let favoriteHero = [
    {
      armor: 33,
      armorperlevel: 4.4,
      attackdamage: 65,
      attackdamageperlevel: 3,
      attackrange: 125,
      attackspeedoffset: null,
      attackspeedperlevel: 2.3,
      big_image_url:
        "https://cdn.pandascore.co/images/lol/champion/big_image/23fafc3c-7792-48b5-a6f3-886752261a83.jpg",
      crit: 0,
      critperlevel: 0,
      hp: 620,
      hpperlevel: 99,
      hpregen: 4,
      hpregenperlevel: 0.75,
      id: 3236,
      image_url:
        "https://cdn.pandascore.co/images/lol/champion/image/eef5aa86-9eda-411a-a170-cc6e11e5c1a3.png",
      movespeed: 335,
      mp: 280,
      mpperlevel: 35,
      mpregen: 7.45,
      mpregenperlevel: 0.6,
      name: "Warwick",
      spellblock: 32,
      spellblockperlevel: 2.05,
      videogame_versions: ["12.21.1"],
    },
  ];
  test("display table content", () => {
    const tree = render(
      <HerosProvider>
        <TableContent headerCells={headerCells} records={favoriteHero} />
      </HerosProvider>
    );
    const heroNameElement = screen.getAllByText("Warwick");
    const heroNameText = within(heroNameElement[0]).getAllByText("Warwick");
    expect(heroNameText[0].innerHTML).toBe("Warwick");
  });
  test("remove  record on remove button click", () => {
    const tree = render(
      <HerosProvider>
        <TableContent headerCells={headerCells} records={favoriteHero} />
      </HerosProvider>
    );
    const heroNameElement = screen.getByTestId("removeButton");
    act(()=>{
      fireEvent.click(heroNameElement,{onclick: favoriteHero = []});
      expect(favoriteHero.length).toBe(0);
    });
  });
});
