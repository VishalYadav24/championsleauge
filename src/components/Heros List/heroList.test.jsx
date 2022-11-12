import { act, fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { HerosProvider } from "../../context/heroscontext";
import HeroDetails from "../HeroDetails/heroDetails.component";
import HerosList from "./herosList.component";
import { getChampion } from "../../utils/api";
import renderer from "react-test-renderer"
describe("Heros List", () => {
  const herosList = [
    {
      id: 3238,
      image:
        "https://cdn.pandascore.co/images/lol/champion/image/0449c26e-f41d-4289-a2bc-32ddb8b3b911.png",
      name: "Zilean",
    },
  ];
  test("display list of heros", () => {
    const tree = render(
      <HerosProvider>
        <HerosList herosList={herosList} />
      </HerosProvider>
    );
    expect(screen.getAllByText("Zilean")[0]?.innerHTML).toBe("Zilean");
  });
  test("display detail of hero selected", () => {
    const tree = render(
      <HerosProvider>
        <HerosList herosList={herosList} />
      </HerosProvider>
    );
    const viewDetailsButton = screen.getByTestId("view player details");
    act(async() => {
      fireEvent.click(viewDetailsButton);
      const heroDetails = render(
        <HerosProvider>
          <HeroDetails selectedHero={"Zilean"} open={true} />
        </HerosProvider>
      );
     // const mockedPost = axios.get.mockReturnValueOnce(heroDetails);
      const data = await getChampion("Zilean");
      expect(axios.get).toHaveBeenCalled();
      expect(data).toEqual(heroDetails);
    });
  });

  test("snapshot",()=>{
    const heroDetails = renderer.create( <HerosProvider>
      <HerosList herosList={herosList} />
    </HerosProvider>).toJSON();
    expect(heroDetails).toMatchSnapshot();
  })

});

const heroDetails = [
  {
    armor: 24,
    armorperlevel: 5,
    attackdamage: 52,
    attackdamageperlevel: 3,
    attackrange: 550,
    attackspeedoffset: null,
    attackspeedperlevel: 2.13,
    big_image_url:
      "https://cdn.pandascore.co/images/lol/champion/big_image/8842e560-c719-4423-86a1-a47b042ce627.jpg",
    crit: 0,
    critperlevel: 0,
    hp: 574,
    hpperlevel: 96,
    hpregen: 5.5,
    hpregenperlevel: 0.5,
    id: 3238,
    image_url:
      "https://cdn.pandascore.co/images/lol/champion/image/0449c26e-f41d-4289-a2bc-32ddb8b3b911.png",
    movespeed: 335,
    mp: 452,
    mpperlevel: 50,
    mpregen: 11.35,
    mpregenperlevel: 0.8,
    name: "Zilean",
    spellblock: 30,
    spellblockperlevel: 1.3,
    videogame_versions: ["12.21.1"],
  },
];
