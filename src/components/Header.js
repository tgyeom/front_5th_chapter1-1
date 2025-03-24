import userStorage from "../userStorage";

const headerHighlight = (type) => {
    return location.pathname.replace("/", "") !== type ? "gray" : "blue";
};

const headerItems = () => {
    const { get } = userStorage();
    const user = get();

    return `
    <li>
      <a href="/" class="text-${headerHighlight("")}-600">홈</a>
    </li>
    ${user.username
            ? `<li><a href="/profile" class="text-${headerHighlight("profile")}-600">프로필</a></li>`
            : ``
        }
    <li>
      ${user.username
            ? `<a href="#" id="logout" class="text-${headerHighlight("logout")}-600">로그아웃</a>`
            : `<a href="#" id="login" class="text-${headerHighlight("logout")}-600">로그인</a>`
        }
    </li>
  `;
};

const Header = () => {
    return `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        ${headerItems()}
      </ul>
    </nav>
  `;
};

export default Header;
