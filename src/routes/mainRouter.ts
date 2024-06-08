import { Router } from "express";
import { indexPageGreeting } from "../controller/general.controller";
import { getBooks } from "../controller/book.controller";
const mainRouter = Router({
  mergeParams: true
})

mainRouter.get('/', indexPageGreeting);
mainRouter.get('/book', getBooks);

export default mainRouter;
