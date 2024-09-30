
import './App.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import Test from "./components/test";
import Login from "./view/user/login";
import LoginKakao from "./view/kakao/LoginKakao";
import {Route, Routes} from "react-router-dom";
import LoginHandler from "./JHkakao/Page/LoginHandler";
import LoginComplete from "./JHkakao/Page/LoginComplete";

function App() {
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/hello`)
  //       .then(response => {
  //         setMessage(response.data);
  //       })
  //       .catch(error => {
  //         console.error('There was an error fetching the data!', error);
  //       });
  // }, []);
  return (
      <div className="App">

          <LoginKakao/>

          {/*<Test/>*/}
          {/*<Login/>*/}
          <Routes>
              <Route
                  path="/login/oauth2/callback/kakao" // 리디렉트 URL
                  element={<LoginHandler />} // 리디렉트 후 표시될 컴포넌트
              />
              <Route path="/LoginComplete" element={<LoginComplete/>}></Route>
          </Routes>
      </div>
  );
}

export default App;
