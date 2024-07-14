import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
 

function RootLayout(){
    return (
        <div>
            {/* <Helmet>
                <title>Metealth Homepage</title>
                <meta name="description" content="국내 최초 손톱 유래 유전자 분석 기반 개인 맞춤형 건강관리 플랫폼" />
            </Helmet> */}
            <Header />
            <div style={{height:50}} />
            <main>
                <Outlet />
                <Footer />
            </main> 
            
            
        </div>
    );
}

export default RootLayout;