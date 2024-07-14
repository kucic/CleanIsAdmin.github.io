
import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from  'styled-components';

import Home from './routes/Home';
import RootLayout from './routes/RootLayout';
import User from './routes/User';
import ProductInfo from './routes/ProductInfo';
import CompanyInfo from './routes/CompanyInfo';
import CustomersSupport from './routes/CustomerSupport';
import Sitemap from './routes/Sitemap';

/**
 * router 
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path:'/',
        element:<Home />,
      },
      {
        path:'user',
        element:<User />,
      },
      {
        path:'product-info',
        element:<ProductInfo />
      },
      {
        path:'company-info',
        element:<CompanyInfo />
      },
      {
        path:'cs',
        element:<CustomersSupport />
      },
      {
        path:'menu',
        element: <Sitemap />
      }
    ]
  },
  
])
 
// const Header = styled.header`
//   background-color: #282c34;
//   min-height: 60px;
//   display: flex;
//   justify-content: space-around;
//   aligh-items: center;
//   color: white;
//   font-size: 1.5em;
//   @media (max-width: 768px) {
//     font-size: 1.2em;
//   }
// `;
// const Nav = styled.nav`
//   display: flex;
//   gap: 20px;
// `;
// const Footer = styled.footer`
//   background-color: #282c34;
//   min-height: 40px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-size: 1em;
//   position: fixed;
//   width: 100%;
//   bottom: 0;
//   @media (max-width: 768px) {
//     font-size: 0.8em;
//   }
// `;
// const MainContent = styled.main`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 20px;
//   @media (max-width: 768px) {
//     padding:10px;
//   }
// `;

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// `
 
// const Home = () => (
//   <MainContent>
//     <h1>Welcom to My WebSite!</h1>
//     <p>this is a simple example home!</p>
//   </MainContent>
// );

// const About = () => (
//   <MainContent>
//     <h1>Welcom to My about!</h1>
//     <p>this is a simple example home!</p>
//   </MainContent>
// );

// const Contact = () => (
//   <MainContent>
//     <h1>Welcom to My Contact!</h1>
//     <p>this is a simple example home!</p>
//   </MainContent>
// );

function App() {
  
  return <RouterProvider router={router} />
  // return (
  //   <Router>
  //     <AppContainer>
  //       <Helmet>
  //         <title>My Website</title>
  //         <meta name="description" content="this is my website make int" />
  //       </Helmet>
  //       <Header>
  //         <Nav>
  //           <Link to="/">Home</Link>
  //           <Link to="/about">About</Link> 
  //           <Link to="/contact">Contact</Link>
  //         </Nav>
  //       </Header>
  //       <Routes>
  //         <Route exact path="/" component={Home} />
  //         <Route exact path="/about" component={About} />
  //         <Route exact path="/contact" component={Contact} /> 
  //       </Routes>
  //       <Footer>
  //         Footer
  //       </Footer>
  //     </AppContainer>
  //   </Router>
  // )
}

export default App;