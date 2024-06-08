import Database from "../config/database.config";

export default class BookModel extends Database {
  public static async getBooks() {
    const books = await this.client.books.findMany({})
    return books;
  }
  public static async create(name: string, author: string) {
    const newBook = await this.client.books.create({
      data: {
        name,
        author
      }
    })
    return newBook;
  }
}
