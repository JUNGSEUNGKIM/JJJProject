import React from 'react';

const KakaoLoginButton = () => {
    const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <button onClick={handleKakaoLogin} className="kakaobtn">
            <img src={`${process.env.PUBLIC_URL}/image/kakao_login_large_narrow.png`} alt="Kakao Login"/>
        </button>
    );
};

export default KakaoLoginButton;
