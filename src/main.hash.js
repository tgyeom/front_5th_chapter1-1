import MainPage from "./pages/mainPage";
import ProfilePage from "./pages/profilePage";
import LoginPage from "./pages/loginPage";
import NotFoundPage from "./pages/notFoundPage";
import userStorage from "./store";

const routes = {
    "/": MainPage,
    "/login": LoginPage,
    "/profile": ProfilePage
}

const getCurrentPath = () => {
    if (location.hash) {
        return location.hash.slice(1);
    }
    return location.pathname;
};

const navigate = (path) => {
    if (location.hash) {
        location.hash = `#${path}`
    } else {
        history.pushState(null, null, path);
        render();
    }
}

const root = document.getElementById("root")

root.addEventListener("submit", (e) => {
    if (e.target.id === "login-form") {
        e.preventDefault();
        const userValue = document.getElementById('username')
        const data = { username: userValue.value, email: "", bio: "" }
        userStorage.set(data)
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
        userStorage.set(userData)

    }
});

root.addEventListener("click", (e) => {
    if (e.target.id === "logout") {
        e.preventDefault();
        userStorage.clear()
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
    const path = getCurrentPath()
    const { get } = userStorage
    const user = get()


    if (user.username && path === "/login") {
        navigate("/")
        return
    }

    if (!user.username && path === "/profile") {
        navigate("/login")
        return
    }
    const page = routes[path] || NotFoundPage;

    const root = document.getElementById("root");
    if (!root) return;

    root.innerHTML = page();
}

render();

window.addEventListener("DOMContentLoaded", render)
window.addEventListener("hashchange", render);
