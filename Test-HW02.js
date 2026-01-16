const library = {
  books: [],

  addBook: function (book) {
    const exists = this.books.some(b => b.title === book.title);
    if (!exists) {
      this.books.push(book);
    }
  },

  removeBook: function (title) {
    this.books = this.books.filter(book => book.title !== title);
  },

  listBooks: function () {
    this.books.forEach((book, index) => {
      const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
      console.log(
  `${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`
);
    });
  },

  getUnreadBooks: function () {
    return this.books.filter(book => book.isRead === false);
  }
};

module.exports = library;