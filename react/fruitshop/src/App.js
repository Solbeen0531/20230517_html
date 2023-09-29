import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
// import {useState} from 'react';

/*
url mapping 페이지 구성하고
나타낼 속성들을 모아서 entity 별로 묶기

이름, 가격, 단위 == 과일

TODO delete - 목록 화면에서 버튼 만들어서 1개 삭제
TODO info - id 활용해서 보기
*/

function App() {

  // const [a1, setA1] = useState([10, 20, 30]); // a1 저장 공간 생성
  // const [a, seta] = useState();

  const [fruitList, setFruitList] = useState(
    {
      id: '',
      name: '기본이름1',
      price: '기본값1',
      count: '기본단위1'
    },
    {
      id: '',
      name: '기본이름2',
      price: '기본값2',
      count: '기본단위2'
    }
  );
  // newFruit 이름의 저장공간 생성
  const [newFruit, setNewFruit] = useState(
    {
      id: '',
      name: '기본이름1',
      price: '기본값1',
      count: '기본단위1'
    }
  );

  const insertHandler = () => {
    console.log("insertHandler 함수 실행");
    console.log(newFruit);
    setFruitList([...fruitList, newFruit]);
  }

  const onChangeInput = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setNewFruit({ ...newFruit, [name]: value });

  }

  const InsertFruit = () => {
    // 과일 추가
    // 과일 목록보기
    // 홈으로
    return (
      <>
        <h1>과일추가</h1>
        <nav>
          <ul>
            <li><Link to="/list">과일 목록 보기</Link></li>
            <li><Link to="/">홈으로</Link></li>
          </ul>
        </nav>
        <div>
          <form>
            <div><span>이름: </span><input type="text" onChange={onChangeInput} value={newFruit.name} name='name'></input></div>
            <div><span>가격: </span><input type="text" onChange={onChangeInput} value={newFruit.price} name='price'></input></div>
            <div><span>단위: </span><input type="text" onChange={onChangeInput} value={newFruit.count} name='count'></input></div>
          </form>
          <button onClick={insertHandler}>추가</button>
        </div>
      </>
    );
  }



  const List = (props) => {
    // const n1 = props.n1;
    // const{n1} = props;
    // const{n2} = props;
    const { n1, n2 } = props;

    // console.log(props.n1);
    console.log(n1);
    console.log(n2);

    // 리스트
    // 과일 추가
    // 홈으로
    return (
      <>
        <h1>리스트</h1>
        <nav>
          <ul>
            <li><Link to="/insert">과일 추가하기</Link></li>
            <li><Link to="/">홈으로</Link></li>
          </ul>
        </nav>
        <table>
          <thead>
            <tr>
              <td>이름</td>
              <td>가격</td>
              <td>단위</td>
            </tr>
          </thead>
          <tbody>
            {fruitList.map((fruit) => {
              console.log(fruit);
              return (
                <tr>
                  <td>{fruit.name}</td>
                  <td>{fruit.price}</td>
                  <td>{fruit.count}</td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/list" element={<List n1="v1" n2={1000}></List>} />
          <Route path="/insert" element={<InsertFruit></InsertFruit>} />
          <Route path="/delete" element={<DeleteFruit></DeleteFruit>} />
          <Route path="/info" element="" />
          <Route path="/update" element="" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


const Home = () => {
  // 홈
  // 과일 목록 보기
  // 과일 추가
  return (
    <>
      <h1>홈</h1>
      <nav>
        <ul>
          <li><Link to="/list">과일 목록 보기</Link></li>
          <li><Link to="/insert">과일 추가하기</Link></li>
        </ul>
      </nav>
    </>
  );
}

// const f0 = function(){ console.log();}
// const f1 = function(data,a) {console.log();}
// const f2 = (data,a) => { console.log(); console.log();}
// const f3 = (data) => { console.log();}
// const f4 = data => console.log();
// const f5 = () => console.log();









const DeleteFruit = () => {
  return (
    <h1>과일삭제</h1>
  );
}// arrow function


export default App;
