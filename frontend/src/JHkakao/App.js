import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router 관련 임포트
import KakaoLoginButton from "./Page/KakaoLoginButton";
import LoginHandler from "./Page/LoginHandler"; // LoginHandler 컴포넌트 임포트

function App() {
    return (
        <Router>
            <div className="App">
                {/* 카카오 로그인 버튼 */}
                <KakaoLoginButton />

                {/* 라우팅 설정 */}
                <Routes>
                    <Route
                        path="/login/oauth2/callback/kakao" // 리디렉트 URL
                        element={<LoginHandler />} // 리디렉트 후 표시될 컴포넌트
                    />
                </Routes>
            </div>
        </Router>

    );
}

export default App;
