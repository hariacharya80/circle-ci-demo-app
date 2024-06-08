import BookModel from "../models/book.model";

export async function getAllBooks() {
  const books = await BookModel.getBooks()
  return books;
}

export async function createBook(name: string, author: string) {
  const newBook = await BookModel.create(name, author);
  return newBook;
}
