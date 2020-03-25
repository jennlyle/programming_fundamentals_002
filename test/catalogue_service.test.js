const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {

//--- Tests for catalogueService.countBooks
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });

//--- Tests for catalogueService.checkBook
  describe("catalogueService.checkBook", () => {
    test("returns true if the book exists in the list", () => {
      expect(catalogueService.checkBook("Dracula by Bram Stoker")).toBe(true);
    });
    test("returns false if the book exists in the list", () => {
      expect(catalogueService.checkBook("Moths by Pamela Mothman")).toBe(false);
    });
  });

//--- Tests for catalogueService.countBooksByFirstLetter
  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
      });
    test("returns 0 if no books begin with the given letter", () => {
        expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });

//--- Tests for catalogueService.countBooksByKeyword
  describe("catalogueService.countBooksByKeyword", () => {
    test("returns the number of book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
    });
    test("returns the number of book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("normal")).toBe(2);
    });
    test("returns the number of book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
    });
    test("returns the number of book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword(2666)).toBe(0);
    });
    test("returns the number of book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword(true)).toBe(0);
    });
    test("returns the number of book titles match a given keyword", () => {
      expect(catalogueService.countBooksByKeyword([1, 2, 3])).toBe(0);
    });
  });

//--- Tests for catalogueService.getBooksByAuthor
describe("catalogueService.getBooksByAuthor", () => {
  expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual([
    "A Tale of Two Cities by Charles Dickens",
    "Oliver Twist by Charles Dickens",
    "Great Expectations by Charles Dickens"
  ]);

  expect(catalogueService.getBooksByAuthor("asdfwerf")).toEqual([
  ]);

  expect(catalogueService.getBooksByAuthor("Charles")).toEqual([
    "A Tale of Two Cities by Charles Dickens",
    "Oliver Twist by Charles Dickens",
    "Great Expectations by Charles Dickens",
    "The Origin of Species by Charles Darwin"
  ]);  
});


});