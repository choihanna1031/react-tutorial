import React from "react";
import MyName from "./MyName";
import { Address, Contact } from "./Info";
import "./styles.css";
// import Hobby from "./Hobby";
// import Food from "./Food";

// Hobby.jsx 만들고 default로 내보내기

// Food.jsx 만들고 좋아하는 음식 만들고 내보내기
// const Kimchi = () => <h1>총각김치</h1>

// 불러오고 사용하기

// 변수
// css in js

const a = true;
const App = () => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: a ? "gray" : "royalblue",
      }}
    >
      <h1>App</h1>
      <MyName />
      <Contact />
      <Address />
      {/* <Hobby /> */}
      {/* <Food /> */}
    </div>
  );
};

export default App;

// main.jsx
// import {App} from './App'

// import App from './App'
// <App />
