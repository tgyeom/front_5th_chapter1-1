(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=a(s);fetch(s.href,l)}})();const u="user",m={user:JSON.parse(localStorage.getItem(u)||"{}"),storage:{}},r={get(){return JSON.parse(localStorage.getItem(u)||"{}")},set(e){localStorage.setItem(u,JSON.stringify(e))},clear(){localStorage.removeItem(u),m.storage={}},setInput(e){m.storage=e},getInput(){return m.storage}},p="/front_5th_chapter1-1",b=e=>{let t;return location.hash?t=location.hash.replace("#",""):t=location.pathname,t.startsWith(p)&&(t=t.slice(p.length)),t===""&&(t="/"),t===`/${e}`?"blue-600 font-bold":"gray-600"},x=()=>{const{get:e}=r,t=e();return`
    ${t.username?`<li><a href="/profile" class="text-${b("profile")}">프로필</a></li>`:""}
    <li>
      ${t.username?'<a href="#" id="logout" class="text-gray-600">로그아웃</a>':`<a href="/login" id="login" class="text-${b("login")}">로그인</a>`}
    </li>
  `},f=()=>`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
       <li>
            <a href="/" class="text-${b("")}">홈</a>
       </li>
        ${x()}
      </ul>
    </nav>
  `,g=()=>`
      <footer class="bg-gray-200 p-4 text-center">
         <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`,y=[{id:1,name:"홍길동",createdAt:"5분 전",desc:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!"},{id:2,name:"김철수",createdAt:"15분 전",desc:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!"},{id:3,name:"이영희",createdAt:"30분 전",desc:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,name:"박인수",createdAt:"1시간 전",desc:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,name:"정수연",createdAt:"2시간 전",desc:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],w=()=>`
    ${y.map(e=>`
        <div class="bg-white rounded-lg shadow p-4">
          <div class="flex items-center mb-2">
            <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2" />
            <div>
              <p class="font-bold">${e.name}</p>
              <p class="text-sm text-gray-500">${e.createdAt}</p>
            </div>
          </div>
          <p>${e.desc}</p>
          <div class="mt-2 flex justify-between text-gray-500">
            <button>좋아요</button>
            <button>댓글</button>
            <button>공유</button>
          </div>
        </div>
      `).join("")}
  `,$=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
    <div class="max-w-md w-full">
      ${f()}
      <main class="p-4">
        <div class="mb-4 bg-white rounded-lg shadow p-4">
          <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
          <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
        </div>
        <div class="space-y-4">
          ${w()}
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
`,I=()=>`
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
`,E=()=>{const{username:e,email:t,bio:a}={...r.get(),...r.getInput()};return`
    <div id="root">
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
          ${f()}
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
                    value="${t||""}"
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
                  >${a||""}</textarea>
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
  `},v=()=>`
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
`,A=(e,t,a)=>{e.addEventListener("submit",o=>{if(o.target.id==="login-form"){o.preventDefault();const l={username:document.getElementById("username").value,email:"",bio:""};a.set(l),t("/");return}if(o.target.id==="profile-form"){o.preventDefault();const s={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};a.set(s),alert("프로필이 성공적으로 저장되었습니다.")}})},L=(e,t)=>{e.addEventListener("input",a=>{var o,s,l;if(["username","email","bio"].includes(a.target.id)){const n={username:(o=document.getElementById("username"))==null?void 0:o.value,email:(s=document.getElementById("email"))==null?void 0:s.value,bio:(l=document.getElementById("bio"))==null?void 0:l.value};t.setInput(n)}})},P=(e,t,a)=>{e.addEventListener("click",o=>{var l;if(o.target.id==="logout"){o.preventDefault(),a.clear(),t("/login");return}if(o.target.id==="login"){t("/login");return}const s=o.target.closest("a");s&&((l=s.getAttribute("href"))!=null&&l.startsWith("/"))&&(o.preventDefault(),t(s.getAttribute("href")))})},d="/front_5th_chapter1-1",c={"/":$,"/login":I,"/profile":E,"*":v},S=({routerMode:e,root:t})=>{const a=s=>{e.navigate(d,s),o()},o=()=>{const s=e.getPath(d),l=r.get(),n=document.getElementById("root");if(!n)return;let i;l.username&&s==="/login"?(e.navigate(d,"/"),i=c["/"]):!l.username&&s==="/profile"?(e.navigate(d,"/login"),i=c["/login"]):i=c[s]||c["*"]||v,n.innerHTML=i()};return A(t,a,r),P(t,a,r),L(t,r),{render:o,navigate:a}},j=(e="")=>{const t=window.location.pathname;return e&&t.startsWith(e)?t.slice(e.length)||"/":t||"/"},B=(e,t)=>{const a=t.startsWith("/")?t:`/${t}`,o=e+a;history.pushState(null,"",o)},O={getPath:j,navigate:B,mode:"history"},N=document.getElementById("root"),{render:h}=S({root:N,routerMode:O});window.addEventListener("DOMContentLoaded",h);window.addEventListener("popstate",h);
