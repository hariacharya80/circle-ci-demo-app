import { Router } from "express";
import { indexPageGreeting } from "../controller/general.controller";
import { addBook, getBooks } from "../controller/book.controller";
import { setRedisCache } from "../controller/redis.controller";
const mainRouter = Router({
  mergeParams: true
})

mainRouter.get('/', indexPageGreeting);
mainRouter.get('/books', getBooks);
mainRouter.post('/book', addBook);
mainRouter.post('/redis-cache', setRedisCache);

export default mainRouter;
