import userStorage from "../store";

const headerHighlight = (type) => {
  let path;
  if (location.hash) {
    path = location.hash.replace("#/", "")
  } else {
    path = location.pathname.replace("/", "")
  }

  return path.includes(type) ? "blue-600 font-bold" : "gray-600"
};

const headerItems = () => {
  const { get } = userStorage
  const user = get();

  return `
    ${user.username
      ? `<li><a href="/profile" class="text-${headerHighlight("profile")}">프로필</a></li>`
      : ``
    }
    <li>
      ${user.username
      ? `<a href="#" id="logout" class="text-gray-600">로그아웃</a>`
      : `<a href="/login" id="login" class="text-${headerHighlight("login")}">로그인</a>`
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
       <li>
            <a href="/" class="text-${headerHighlight("")}">홈</a>
       </li>
        ${headerItems()}
      </ul>
    </nav>
  `;
};

export default Header;
