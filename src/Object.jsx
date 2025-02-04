import { useState } from "react";
import SignupForm from "./SignupForm";

const Object = () => {
  const a = {};
  const b = [];

  console.log(typeof a, typeof b);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const [signinProps, setSingninProps] = useState({ email: "", password: "" });
  const onChange = (e) => {
    console.log(e.target.value, e.target.name);
    const { value, name } = e.target;
    setSingninProps((prev) => ({ ...prev, [name]: value }));
  };

  const [array, setArray] = useState([]);

  const onSubmit = () => {
    if (signinProps.name.length === 0) {
      return alert("이름을 적어주세요");
    }
    setArray((prev) => {
      let copy = [...prev, sigininProps.name];

      console.log(copy);
      return copy;
    });

    // setArray(prev => [...prev, signinProps.name])
  };

  const onDelete = () => {
    // const name = signinProps.name
    const { name } = signinProps;
    if (name.length === 0) {
      return alert("이름 입력 ㄱㄱ");
    }

    const index = array.findIndex((person) => person === name);
    if (index < 0) {
      return alert("존재 ㄴㄴ");
    }
    console.log(array[index]);

    // setArray((prev) => {
    //   let copy = [...prev];
    //   copy.splice(index, 1);

    //   console.log(copy);

    //   return copy;
    // });

    setArray((prev) => {
      let copy = prev.filter((person) => person !== name);

      console.log(copy);
      return copy;
    });
    // setArray(prev => prev.filter(person => person !== name))
  };

  const [users, setUsers] = useState([
    {
      name: "서준성",
      address: "대전중구",
      mobile: "01012341234",
      password: "123123",
      email: "sffsfsaf",
    },
  ]);

  const addUser = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setUsers((prev) => [...prev, user]);

        resolve("회원가입 되었습니다.");
      }, 1000);
    });

  return (
    <div>
      <h1>Object</h1>
      <input
        type="text"
        value={signinProps.email}
        onChange={onChange}
        name="eamil"
      />
      <input
        type="password"
        value={signinProps.email}
        onChange={onChange}
        name="password"
      />
      <input
        type="text"
        value={signinProps.email}
        onChange={onChange}
        name="name"
      />
      <button onClick={onSubmit}>ADD</button>
      <button onClick={onDelete}>DELETE</button>

      <SignupForm setUsers={setUsers} users={users} />

      {/* 
        //  setSingninProps(prev => ({...prev, email:e.target.value}))
        // callback 함수를 사용해서 객체를 return 할 때 한줄로 작성하고 싶다면 return 없애고 ()안에 {}를 사용한 뒤 객체 입력하면 됨
        */}
    </div>
  );
};

export default Object;
