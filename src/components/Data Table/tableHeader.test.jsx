import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader.component";
import renderer from "react-test-renderer";
describe("should display table header", () => {
  test("should display table headers", () => {
    // const tableHeader = render(<TableHeader headerCells={headerCells} />);
    // expect(tableHeader.getAllByTestId("ArrowDownwardIcon")).toBeTruthy();
    const tree = render(<TableHeader headerCells={columnHeaders} />);
    expect(screen.getAllByTestId("ArrowDownwardIcon")[0]).toBeInTheDocument();
  });
  test("snapshot", () => {
    const tableHeader = renderer.create(
      <TableHeader headerCells={columnHeaders}/>
    ).toJSON();
    expect(tableHeader).toMatchSnapshot();
  })
});

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

const columnHeaders = headerCells.map((data) => {
  return [
    {
      key: data,
      label: data.toUpperCase(),
      disableSorting: data === "image_url" ? true : false,
    },
  ];
});
