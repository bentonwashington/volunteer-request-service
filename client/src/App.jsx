import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Nav from './components/navbar/nav'
import ProfilePage from './components/ProfilePage/ProfilePage';
import Login from './components/Login/login'
import SignUp from './components/SignUp/signUp.js'
import Contact from './components/contact/Contact';
import Feed from './components/Feed/feed.jsx';

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
  <Login/>  
  <Feed/>  
  <ProfilePage/>
  <Contact/>
  <SignUp/>
  
</div>     
    
  );
}

export default App;

