const library = {
    books: [],

    addBook: function (book) {
        // เช็คว่ามีหนังสือชื่อซ้ำกันหรือไม่โดยใช้ .some()
        const exists = this.books.some(b => b.title === book.title);
        if (!exists) {
            this.books.push(book); // ถ้าไม่ซ้ำ ให้เพิ่มเข้า Array
        }
    },

    removeBook: function (title) {
        // ใช้ .filter() เพื่อสร้าง Array ใหม่ที่มีเฉพาะหนังสือที่ "ชื่อไม่ตรงกับที่ระบุ" (เก็บตัวที่ไม่ถูกลบไว้)
        this.books = this.books.filter(book => book.title !== title);
    },

    listBooks: function () {
        // วนลูปแสดงผลด้วย .forEach()
        this.books.forEach((book, index) => {
            // เช็คสถานะการอ่านด้วย Ternary Operator (?)
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            // แสดงผลโดยใช้ Backticks (`)
            console.log(
                `${index + 1}. ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}`
            );
        });
    },

    getUnreadBooks: function () {
        // คืนค่าเป็น Array ของหนังสือที่ isRead เป็น false
        return this.books.filter(book => book.isRead === false);
    }
};

// --- ส่วนทดสอบการทำงาน (Test Cases) ---

library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

console.log("--- รายชื่อหนังสือทั้งหมด ---");
library.listBooks();

console.log("\n--- รายชื่อหนังสือที่ยังไม่ได้อ่าน ---");
console.log(library.getUnreadBooks());

console.log("\n--- ลบหนังสือเรื่อง 1984 แล้วแสดงผลใหม่ ---");
library.removeBook("1984");
library.listBooks();

module.exports = library;