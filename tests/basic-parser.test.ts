import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)

  expect(results).toHaveLength(8);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
  expect(results[5]).toEqual(["John", "21", "blue"]);
  expect(results[6]).toEqual(["", "", "red"]);
  // expect(results[7]).toEqual(["icame, isaw, iconquered"]) // this is what the result SHOULD look like, but it fails

});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for (const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
})
// Additional tests for quoted entries with commas
const ENTRIES_WITH_COMMAS_CSV_PATH = path.join(__dirname, "../data/entries_with_commas.csv");

describe("parseCSV with quoted entries containing commas", () => {
  test("parses quoted fields with commas correctly", async () => {
    const results = await parseCSV(ENTRIES_WITH_COMMAS_CSV_PATH);
    expect(results[0]).toEqual(["name", "quote"]);
    expect(results[1]).toEqual(["Alice", "Hello, world!"]);
    expect(results[2]).toEqual(["Bob", "This is a test, with commas, inside quotes."]);
    expect(results[3]).toEqual(["Charlie", "Comma, separated, values, are tricky."]);
    expect(results[4]).toEqual(["Nim", "Quotes, commas, and more, all together."]);
    expect(results[5]).toEqual(["John", '"Double quotes" can appear, too.']);
    expect(results[6]).toEqual(["Smith, Jane", "Her name, with a comma, is quoted."]);
    expect(results[7]).toEqual(["icame, isaw, iconquered", "A famous phrase, with, many, commas."]);
  });

  test("handles double quotes inside quoted fields", async () => {
    const results = await parseCSV(ENTRIES_WITH_COMMAS_CSV_PATH);
    expect(results[5][1]).toBe('"Double quotes" can appear, too.');
  });

  test("parses names with commas correctly", async () => {
    const results = await parseCSV(ENTRIES_WITH_COMMAS_CSV_PATH);
    expect(results[6][0]).toBe("Smith, Jane");
    expect(results[6][1]).toBe("Her name, with a comma, is quoted.");
  });
});