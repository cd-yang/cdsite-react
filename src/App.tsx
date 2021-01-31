import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

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
