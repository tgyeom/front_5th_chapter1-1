import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage";
import LoginPage from "./pages/loginPage";
import NotFoundPage from "./pages/notFoundPage";
import userStorage from "./store";


const BASE_PATH = "/front_5th_chapter1-1";

const getCurrentPath = () => {
  const path = window.location.pathname;
  if (BASE_PATH && path.startsWith(BASE_PATH)) {
    return path.slice(BASE_PATH.length) || "/";
  }
  return path;
};

const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
  "*": NotFoundPage,
};

const render = () => {
  const { get } = userStorage;
  const user = get();
  const path = getCurrentPath();


  if (user.username && path === "/login") {
    navigate("/");
    return;
  }
  if (!user.username && path === "/profile") {
    navigate("/login");
    return;
  }

  const PageComponent = routes[path] || routes["*"];
  const root = document.getElementById("root");
  if (!root) return;
  root.innerHTML = PageComponent();
};


const navigate = (path) => {
  const fullPath = BASE_PATH + (path.startsWith("/") ? path : `/${path}`);
  history.pushState(null, null, fullPath);
  render();
};


const root = document.getElementById("root");

root.addEventListener("submit", (e) => {
  if (e.target.id === "login-form") {
    e.preventDefault();
    const userValue = document.getElementById("username");
    const data = { username: userValue.value, email: "", bio: "" };
    userStorage.set(data);
    navigate("/");
    return;
  }

  if (e.target.id === "profile-form") {
    e.preventDefault();
    const userData = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      bio: document.getElementById("bio").value,
    };
    userStorage.set(userData);
  }
});

root.addEventListener("click", (e) => {
  if (e.target.id === "logout") {
    e.preventDefault();
    userStorage.clear();
    navigate("/login");
    return;
  }

  if (e.target.id === "login") {
    navigate("/login");
    return;
  }

  const target = e.target.closest("a");
  if (target && target.getAttribute("href")?.startsWith("/")) {
    e.preventDefault();
    navigate(target.getAttribute("href"));
  }
});

window.addEventListener("popstate", render);
window.addEventListener("DOMContentLoaded", render);
