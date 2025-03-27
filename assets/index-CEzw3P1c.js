(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=l(s);fetch(s.href,o)}})();const m="user",n={get(){return JSON.parse(localStorage.getItem(m)||"{}")},set(t){localStorage.setItem(m,JSON.stringify(t))},clear(){localStorage.clear()}},b="/front_5th_chapter1-1",d=t=>{let e;return location.hash?e=location.hash.replace("#",""):e=location.pathname,e.startsWith(b)&&(e=e.slice(b.length)),e===""&&(e="/"),e===`/${t}`?"blue-600 font-bold":"gray-600"},v=()=>{const{get:t}=n,e=t();return`
    ${e.username?`<li><a href="/profile" class="text-${d("profile")}">프로필</a></li>`:""}
    <li>
      ${e.username?'<a href="#" id="logout" class="text-gray-600">로그아웃</a>':`<a href="/login" id="login" class="text-${d("login")}">로그인</a>`}
    </li>
  `},p=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
       <li>
            <a href="/" class="text-${d("")}">홈</a>
       </li>
        ${v()}
      </ul>
    </nav>
  `,g=()=>`
      <footer class="bg-gray-200 p-4 text-center">
         <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`,x=[{id:1,name:"홍길동",createdAt:"5분 전",desc:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",createdAt:"15분 전",desc:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",createdAt:"30분 전",desc:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,name:"박인수",createdAt:"1시간 전",desc:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,name:"정수연",createdAt:"2시간 전",desc:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],y=()=>`
    ${x.map(t=>`
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2" />
            <div>
              <p class="font-bold">${t.name}</p>
              <p class="text-sm text-gray-500">${t.createdAt}</p>
            </div>
          </div>
          <p>${t.desc}</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
      `).join("")}
  `,w=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${p()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        <div class="space-y-4">
          ${y()}
          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">김철수</p>
                <p class="text-sm text-gray-500">15분 전</p>
              </div>
            </div>
            <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">이영희</p>
                <p class="text-sm text-gray-500">30분 전</p>
              </div>
            </div>
            <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">박민수</p>
                <p class="text-sm text-gray-500">1시간 전</p>
              </div>
            </div>
            <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>

          <div class="bg-white rounded-lg shadow p-4">
            <div class="flex items-center mb-2">
              <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
              <div>
                <p class="font-bold">정수연</p>
                <p class="text-sm text-gray-500">2시간 전</p>
              </div>
            </div>
            <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
            <div class="mt-2 flex justify-between text-gray-500">
              <button>좋아요</button>
              <button>댓글</button>
              <button>공유</button>
            </div>
          </div>
        </div>
      </main>
      ${g()}

    </div>
  </div>
`,$=()=>{const{get:t}=n,{username:e,email:l,bio:a}=t();return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${p()}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">내 프로필</h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${e||""}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${l||""}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >${a||"자기소개입니다."}</textarea>
                </div>
                <button 
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>
          ${g()}
        </div>
      </div>
    </div>
  `},A=()=>`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input 
              type="text"
              id="username" 
              placeholder="사용자 이름" 
              class="w-full p-2 border rounded"
            >
          </div>
          <div class="mb-6">
            <input 
              type="password" 
              placeholder="비밀번호" 
              class="w-full p-2 border rounded"
            >
          </div>
          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white p-2 rounded font-bold"
          >
            로그인
          </button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">
            비밀번호를 잊으셨나요?
          </a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">
            새 계정 만들기
          </button>
        </div>
      </div>
    </main>
`,E=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div 
      class="bg-white p-8 rounded-lg shadow-md w-full text-center" 
      style="max-width: 480px"
    >
      <h1 class="text-2xl font-bold text-blue-600 mb-4">
        항해플러스
      </h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">
        404
      </p>
      <p class="text-xl text-gray-600 mb-8">
        페이지를 찾을 수 없습니다
      </p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a 
        href="/" 
        class="bg-blue-600 text-white px-4 py-2 rounded font-bold"
      >
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,c="/front_5th_chapter1-1",P=()=>{const t=window.location.pathname;return t.startsWith(c)?t.slice(c.length)||"/":t},f={"/":w,"/login":A,"/profile":$,"*":E},u=()=>{const{get:t}=n,e=t(),l=P();if(e.username&&l==="/login"){r("/");return}if(!e.username&&l==="/profile"){r("/login");return}const a=f[l]||f["*"],s=document.getElementById("root");s&&(s.innerHTML=a())},r=t=>{const e=c+(t.startsWith("/")?t:`/${t}`);history.pushState(null,null,e),u()},h=document.getElementById("root");h.addEventListener("submit",t=>{if(t.target.id==="login-form"){t.preventDefault();const l={username:document.getElementById("username").value,email:"",bio:""};n.set(l),r("/");return}if(t.target.id==="profile-form"){t.preventDefault();const e={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};n.set(e)}});h.addEventListener("click",t=>{var l;if(t.target.id==="logout"){t.preventDefault(),n.clear(),r("/login");return}if(t.target.id==="login"){r("/login");return}const e=t.target.closest("a");e&&((l=e.getAttribute("href"))!=null&&l.startsWith("/"))&&(t.preventDefault(),r(e.getAttribute("href")))});window.addEventListener("popstate",u);window.addEventListener("DOMContentLoaded",u);
