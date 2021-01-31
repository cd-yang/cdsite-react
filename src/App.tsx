import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Layout className="App">
        <Header />
        <Body />
        <Footer />
      </Layout>
    </BrowserRouter>);
}

export default App;
