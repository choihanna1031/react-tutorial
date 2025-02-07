// import { useEffect, useState } from "react";

// const person = {
//   name: "mario",
//   age: 20,
//   hobbies: ["golf"],
// };

// const App = () => {
//   const [last, setLast] = useState("");
//   const [name, setName] = useState("");

//   const [msec, setMSec] = useState(0);
//   const [sec, setSec] = useState(0);
//   const [counting, setCounting] = useState(false);

//   useEffect(() => {
//     console.log(last, name);
//   }, []);
//   // 해당 컴포넌트가 렌더링 되는 최초 1회만 실행

//   useEffect(() => {
//     console.log(last, name);
//   }, [last, name]);

//   useEffect(() => {
//     console.log({ counting });

//     if (counting) {
//       const count = setInterval(() => {
//         setMSec((prev) => prev + 1);
//       }, 1);

//       return () => {
//         clearInterval(count);
//       };
//     } else {
//       console.log("counting has stopped");
//     }
//   }, [counting]);

//   return (
//     <div>
//       <h1>React Tutorial</h1>
//       <input
//         type="text"
//         value={last}
//         onChange={(e) => setLast(e.target.value)}
//       />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <div>
//         <h2>{msec / 1000}초</h2>
//         <button
//           onClick={() => {
//             setCounting((prev) => !prev);
//           }}
//         >
//           {counting ? "STOP" : "START"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
// import { useEffect, useState } from "react";

// const App = () => {
//   const [sec, setSec] = useState(0);
//   const [counting, setCounting] = useState(false);

//   const onPlus = () => {
//     setSec((prev) => prev + 1000);
//   };
//   const onMinus = () => {
//     setSec((prev) => prev - 1000);
//   };
//   const onReset = () => {
//     setSec(0);
//   };

//   useEffect(() => {
//     console.log(sec);
//   }, [sec]);
//   // [] 빈 배열은 최초 1회만 실행 해당 컴포넌트가 헨더링 되는 시점

//   useEffect(() => {
//     if (counting) {
//       const count = setInterval(() => {
//         setSec((prev) => prev + 10);
//       }, 10);

//       return () => {
//         clearInterval(count);
//       };
//     }
//   }, [counting]);

//   useEffect(() => {
//     console.log("App has mounted!");
//   }, []);

//   // 배열을 사용하지 않으면 눈치개코가 됨
//   // 모든 것들에 반응하는 흉악한 코드가 될 수 있음

//   // useEffect(() => {
//   //   console.log("App has rendered");
//   // });

//   // 배열에 우리가 주시하고 싶은 변수/함수를 넣어두면 해당 변수/함수가 업데이트 될 때에만 작동하는 코드를 짤 수 있음.

//   return (
//     <div>
//       <h1>App</h1>
//       <h3>{sec / 1000}초</h3>
//       <button onClick={onPlus}>+</button>
//       <button onClick={onMinus}>-</button>
//       <button onClick={onReset}>RESET</button>
//       <button
//         onClick={() => {
//           setCounting((prev) => !prev);
//         }}
//       >
//         {counting ? "STOP" : "START"}
//       </button>
//     </div>
//   );
// };

// export default App;
import { useState, useEffect, useRef } from "react";
const initialState = [];

const App = () => {
  const [todos, setTodos] = useState(initialState);

  const [todo, setTodo] = useState("");

  const ref = useRef(null);

  // 6. onSumbit이라는 이름의 함수를 만드세요.
  const onSubmit = () => {
    console.log(todo);

    // 6-2. todo 값 입력되지 않았을 때 예외처리
    // 예외처리 경고 + (인풋창 포커스)
    if (todo.length === 0) {
      alert("아무것도 입력되지 않았습니다.");
      return ref.current.focus();
    }

    // 6-3. todo 값이 1글자 이하일 때에도 예외처리
    if (todo.length <= 1) {
      alert("할일이 너무 짧습니다.");
      return ref.current.focus();
    }
    // 6-4 setTodo 함수를 사용해서 todo 값을 todos에 추가하기
    // setTodos(
    //   prev => {
    //     // todo를 제일 위에 보이게 할지, 마지막에 추가할지
    //     return [todo, ...prev]// set함수는 무조건 원래의 값과 같은 타입을 return 해줘야 함
    //   }
    //   // todos 배열입니다. 배열은 무조건 prev이전값을 다뤄야 함
    // )

    setTodos((prev) => [todo, ...prev]);

    setTodo("");
    ref.current.focus();
  };

  useEffect(() => {
    console.log({ todos });
  }, [todos]);

  return (
    <div>
      <h1>APP</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={ref}
        />
        <button>ADD</button>
      </form>

      <ul>
        {todos.map((todo) => {
          const onDelete = () =>
            // setTodos((prev) => {
            //   let copy = [...prev];

            //   copy.splice(index, 1);

            //   return copy;
            // });
            setTodos((prev) => prev.filter((item) => item !== todo));

          return (
            <li key={todo}>
              {todo}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
