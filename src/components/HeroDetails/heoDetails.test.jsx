import { render, screen, waitFor } from "@testing-library/react";
import { HerosProvider } from "../../context/heroscontext";
import HeroDetails from "./heroDetails.component";
import { rest } from "msw";
import { setupServer } from "msw/node";
describe("HeroDetails", () => {
  const server = setupServer(
    rest.get(
      "https://api.pandascore.co/lol/champions?search[name]=Zilean&token=eNraJAvEMOVX0M_d7IfaecVTtJK_QiAXA-_qUL8WJckQX44PZ1U",
      (req, res, ctx) =>
        res(
          ctx.json([
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
          ])
        )
    ),
    rest.get(
      "https://lolbe2.azurewebsites.net/api/v1/champstaticdata?champion=Zilean",
      (req, res, ctx) =>
        res(
          ctx.json([
            {
              introduction:
                "Zilean was once a powerful Icathian mage who has since become obsessed with time. After the destruction of his homeland he studied the passage of time, using magic to become immortal. Now he drifts through the past, present and future, trying to find a moment where he can turn back the destruction of Icathia.",
              image: {
                banner:
                  "https://lolstorage02.blob.core.windows.net/lolstatic/dragontail-12.20.1/img/champion/splash/Zilean_0.jpg",
                tile: "https://lolstorage02.blob.core.windows.net/lolstatic/dragontail-12.20.1/img/champion/tiles/Zilean_0.jpg",
                introduction:
                  "Zilean was once a powerful Icathian mage who has since become obsessed with time. After the destruction of his homeland he studied the passage of time, using magic to become immortal. Now he drifts through the past, present and future, trying to find a moment where he can turn back the destruction of Icathia.",
                name: "Zilean",
              },
            },
          ])
        )
    )
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("display hero details loading state", () => {
    const herodetails = render(
      <HerosProvider>
        <HeroDetails selectedHero="Zilean" open={true} />
      </HerosProvider>
    );
    expect(screen.getByTestId("heading")).toBeInTheDocument();
  });

  test("display herodetails", async () => {
    const herodetails = render(
      <HerosProvider>
        <HeroDetails selectedHero="Zilean" open={true} />
      </HerosProvider>
    );

    await waitFor(() => expect(screen.getByText("Zilean")).toBeInTheDocument());
  });
});