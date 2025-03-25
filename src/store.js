const STORAGE_NAME = "user"

const userStorage = {
    get() {
        return JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");
    },
    set(data) {
        localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
    },
    clear() {
        localStorage.clear();
    },
};


export default userStorage