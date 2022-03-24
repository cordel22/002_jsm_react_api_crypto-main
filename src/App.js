import React from 'react';
import { /* Switch, Route,  */Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails, NoPage/* , Layout, Footer */ } from './components';
import './App.css';

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LayKokotout from "./pages/LayKokotout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contacts from "./pages/Contacts";
// import NoPage from "./pages/NoPage";




export default function App() {
  return (

        <div className="app">
          <div className="navbar">
            
          </div>
          <div className="main">

          <div className="routes">
        
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />}>
                <Route index element={<Homepage />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<NoPage />} />
                
              </Route>
            </Routes>
          </BrowserRouter>

          </div>
        
</div>
      <div className="footer">
        
      </div>
    </div>

  );
}



ReactDOM.render(<App />, document.getElementById("root"));









/* 
//  funguje
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayKokotout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



ReactDOM.render(<App />, document.getElementById("root"));

 */
/* const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

      </div>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  )
}

export default App */