export const createRouter = ({ basePath = "", routes, routerMode, userStorage }) => {
    const navigate = (path) => {
        routerMode.navigate(basePath, path);
        render();
    };

    const render = () => {
        const path = routerMode.getPath(basePath);
        const user = userStorage.get();

        const root = document.getElementById("root");
        if (!root) return;

        let pageComponent;

        if (user.username && path === "/login") {
            routerMode.navigate(basePath, "/");
            pageComponent = routes["/"];
        } else if (!user.username && path === "/profile") {
            routerMode.navigate(basePath, "/login");
            pageComponent = routes["/login"];
        } else {
            pageComponent = routes[path] || routes["*"] || NotFoundPage;
        }

        root.innerHTML = pageComponent();
    };
    return { render, navigate };
};

