class Book {
  // property
  private title: string;
  private author: string;
  private year: string;

  // constructor
  constructor(title: string, author: string, year: string) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  // get summary
  getSummary() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  }
}
