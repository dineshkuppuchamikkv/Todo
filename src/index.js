import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import "./index.css";
import Content from './Content';
import AddItem from './AddItem';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AddItem  />
    <Footer />
    <Content />
  </React.StrictMode>,
  document.getElementById('root')
);
