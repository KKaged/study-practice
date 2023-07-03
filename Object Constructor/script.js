function books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title, author, pages, read);
  };
}

const thehobbit = new books(
  "thehobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);
thehobbit.info();
