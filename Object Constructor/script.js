function books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + author + pages + read;
  };
}

const thehobbit = new books(
  "The Hobbit ",
  "J.R.R. Tolkien ",
  "295 pages ",
  "not read yet"
);
thehobbit.info();
