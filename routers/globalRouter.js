import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoControllers";

import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
  getMe
} from "../controllers/userControllers";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);
globalRouter.get(routes.me, onlyPrivate, getMe);

export default globalRouter;
