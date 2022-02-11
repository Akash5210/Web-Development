import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Component/Main'
import './style/stylesheet.css'                     //importing css stylesheet.css file from style folder
import {BrowserRouter} from 'react-router-dom'      //use for browser router


//browser will be able to always track the changes in the URL  so we will use browser-router
ReactDOM.render(
  <BrowserRouter><Main /></BrowserRouter>       //no space inside the body of browserRouter tag otherwise browser will crash
  ,
  document.getElementById('root')
);


//type npm start in terminal to run the project