import { Request, Response, NextFunction } from "express";
import * as BookService from "../service/book.service";
import BadRequestException from "../exceptions/BadRequest.exception";

export async function getBooks(_req: Request, res: Response, next: NextFunction) {
  try {
    const books = await BookService.getAllBooks()
    return res.status(200).json(books);
  } catch (err) {
    return next(err);
  }
}

export async function addBook(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, author } = req.body;
    if (!name || !author) {
      throw new BadRequestException('Author or Book name is missing.');
    }
    const newBook = await BookService.createBook(name, author);
    return res.status(201).json({ message: 'Book Created Successfully.', data: newBook })
  } catch (error) {
    return next(error);
  }
}
