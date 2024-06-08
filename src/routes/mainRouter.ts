import { Router } from "express";
import { indexPageGreeting } from "../controller/general.controller";
import { addBook, getBooks } from "../controller/book.controller";
const mainRouter = Router({
  mergeParams: true
})

mainRouter.get('/', indexPageGreeting);
mainRouter.get('/books', getBooks);
mainRouter.post('/book', addBook)
export default mainRouter;
