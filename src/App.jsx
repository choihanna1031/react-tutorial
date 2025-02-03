/// 1. Header Component 만들기

/// 2. Footer Component 만들기

/// 3. main의 내용은 App.jsx작성하기

import Header from "./Header";
import Footer from "./Footer";

// const fn = (text) => console.log(text);
// fn("hello");

// // Props drilling => Properties = props
// // 속성전달

// const Fn = ({ text }) => {
//   return (
//     <div>
//       <h1>{text}</h1>
//     </div>
//   );
// };
// <Fn text={"hello"} />;

const App = () => {
  const name = "Hanna";

  const email = "chlgkssk1031@naver.com";

  const githubUrl = "https://www.github.com/choihanna1031";

  const mobile = "010 1234 1234"; // '010 XXXX XXXX'

  const intro = "안녕하세요, 잘가세요.";

  return (
    <div>
      <Header name={"Hello World"} />
      <main>
        <h1>간단한 인삿말</h1>
        <p>
          안녕하세요, 저는 {name}입니다. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Omnis nam earum laboriosam eum nisi mollitia
          aliquid, aperiam assumenda repellendus, qui asperiores ullam eveniet
          provident unde facilis magni in praesentium consectetur.
        </p>
        <br />
        <p>연락처는 {mobile}입니다.</p>
        <br />
        <p>이메일은 {email}입니다.</p>
      </main>
      <Footer email={email} name={name} mobile={mobile} intro={intro} />
    </div>
  );
};

export default App;

// Props - Drilling
