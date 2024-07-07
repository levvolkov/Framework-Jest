const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});

it("Achieving 100% code coverage by tests", () => {
  const input = [
    "Волшебник изумрудного города",
    "Волшебник изумрудного города",
    "Волшебник изумрудного города",
  ];
  const expected = [
    "Волшебник изумрудного города",
    "Волшебник изумрудного города",
    "Волшебник изумрудного города",
  ];
  const output = sorting.sortByName(input);

  expect(output).toEqual(expected);
});
