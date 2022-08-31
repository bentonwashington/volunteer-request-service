import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Nav from './components/navbar/nav'

import Login from './components/Login/login'
import Header from './components/BackgroundStrip/HeaderStrip.js';

// import Home from './pages/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
<div>
  
  <Nav/>
  <Header/>   
  <Login/> 
   

  
</div>     
    
  );
}

export default App;