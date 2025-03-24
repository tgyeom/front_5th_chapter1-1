const STORAGE_NAME = "user"

const userStorage = () => {
    return {
        get() {
            return JSON.parse(localStorage.getItem(STORAGE_NAME) || "{}");

        },
        set(data) {
            localStorage.setItem(STORAGE_NAME, JSON.stringify(data));
        },
        clear() {
            localStorage.removeItem(STORAGE_NAME);
        },
    };
}

export default userStorage