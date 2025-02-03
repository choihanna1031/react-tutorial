import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Like from "./Like";

// Header.jsx 컴포넌트 만들기

// Header props로 name받기

// <header><h1>{name}의 소개 페이지</h1></header>

// name이라는 변수를 useState를 사용해서 만들기, 초기값으로 이름 넣기

const App = () => {
  const [name, setName] = useState("Choi Hanna");
  const [count, setCount] = useState(0);

  /// Footer 만들기
  /// name props-drilling -> p {name}의 페이지에 방문해주셔서 감사합니다. 안녕히가세요.

  /// useState로 count 변수 선언하기

  /// Counter 컴포넌트로 props-drilling 하기
  return (
    <div>
      <Header name={name} />
      <h1>React Tutorial</h1>
      <input
        type="text"
        value={name}
        placeholder={"Enter Your Name"}
        onChange={(e) => setName(e.target.value)}
      />
      <Counter count={count} setCount={setCount} />
      <Like />
      <Footer name={name} />
    </div>
  );
};

export default App;

// main.jsx
// import {App} from './App'

// import App from './App'
// <App />
