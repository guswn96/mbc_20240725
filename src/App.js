import React from "react";
//react 라이브러리 블러오는 명령어
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";

// function App() {
//   return <div>App</div>
// }

const App = () => {
  //컴포넌트 이름은 반드시 첫글자는 대문자로 안그러면 컴포넌트 인식못함
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomeView />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
//App 컴포넌트를 다른 파일에서 재사용 할 수 있도록 내보내기 설정
// *.jsx(자바스크립트 확장버전)를 컴포넌트라고 함.
