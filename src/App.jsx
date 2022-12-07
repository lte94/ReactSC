import React, { useState } from 'react'; // useState 쓰겠다고 import 해와야함
import './App.css'; // 🔥 반드시 App.css 파일을 import 해줘야 합니다.
import CustomButton from './components/CustomButton';
import User from './components/Users';

const App = () => {
  const [users, setUsers] = useState([
    // 정적배열을 동적배열로 바꿔주기 위해 useState 사용
    { id: 1, age: 30, name: '송중기' },
    { id: 2, age: 24, name: '송강' },
    { id: 3, age: 21, name: '김유정' },
    { id: 4, age: 29, name: '구교환' },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addUserHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
  };
  const deleteUserHandler = id => {
    const newUserList = setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="app-style">
      {users.map(user => {
        // user가 map으로 돌아서
        if (user.age < 25) {
          return (
            <User
              handleDelete={deleteUserHandler}
              user={user}
              key={user.id}
            ></User>
          );
          // user에 대한 정보를 props로 넘겨줌
        } else {
          return null;
        }
      })}
      <input
        value={name}
        placeholder="이름을 입력해주세요" // name과 age햇갈릴까봐 해놓은것
        // 인풋 이벤트로 들어온 입력 값을 name의 값으로 업데이트
        onChange={e => setName(e.target.value)}
      />
      <input
        value={age}
        placeholder="나이를 입력해주세요" // name과 age햇갈릴까봐 해놓은것
        // 인풋 이벤트로 들어온 입력 값을 age의 값으로 업데이트
        onChange={e => setAge(e.target.value)}
      />
      <CustomButton color="green" onClick={addUserHandler}>
        추가하기
      </CustomButton>
    </div>
  );
};

export default App;

// React에서는 map을 사용해서 Component를 반복렌더링 할때 반드시 Component의 key를 넣어주어야 한다.
