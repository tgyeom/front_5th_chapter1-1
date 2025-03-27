import { createRouter } from "./router";
import { HistoryRouter } from "./router/modes";
import { formListeners, clickListeners } from "./listeners";
import userStorage from "./store";
import MainPage from "./pages/mainPage";
import LoginPage from "./pages/loginPage";
import ProfilePage from "./pages/profilePage";
import NotFoundPage from "./pages/notFoundPage";

const BASE_PATH = "/front_5th_chapter1-1";
const root = document.getElementById("root");

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
  "*": NotFoundPage,
};

const { render, navigate } = createRouter({
  basePath: BASE_PATH,
  routes,
  routerMode: HistoryRouter,
  userStorage,
});

formListeners(root, navigate, userStorage);
clickListeners(root, navigate, userStorage);

window.addEventListener("DOMContentLoaded", render);
window.addEventListener("popstate", render);
