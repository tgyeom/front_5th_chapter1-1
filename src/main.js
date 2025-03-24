import MainPage from "./pages/main";
import ProfilePage from "./pages/profile";
import LoginPage from "./pages/login";
import ErrorPage from "./pages/error";
import userStorage from "./userStorage";

const routes = () => {
  const { get } = userStorage()
  const user = get()
  return {
    "/": MainPage,
    "/login": user.username ? MainPage : LoginPage,
    "/profile": user.username ? ProfilePage : LoginPage
  }
}

const navigate = (path) => {
  history.pushState(null, null, path);
  render();
}

document.addEventListener("submit", (e) => {
  if (e.target.id === "login-form") {
    e.preventDefault();
    const id = document.querySelector('input[type="text"]');
    localStorage.setItem("user", JSON.stringify({ username: id.value }));
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
    localStorage.setItem("user", JSON.stringify(userData));
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "logout") {
    e.preventDefault();
    localStorage.removeItem("user");
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

const render = () => {
  const path = location.pathname;
  const page = routes()[path] || ErrorPage;
  document.body.innerHTML = page();
}

window.addEventListener("popstate", render);

render();
