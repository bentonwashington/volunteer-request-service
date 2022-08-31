import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Nav from './components/navbar/nav'
<<<<<<< HEAD
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Feed from './feed/feed'
=======
import ProfilePage from './components/ProfilePage/ProfilePage';
import Login from './components/Login/login'
import Contact from './components/contact/Contact';

// import Home from './pages/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';

>>>>>>> ed8f2604467b8b98b30cf7232ebb22aa8eb96f96
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
<<<<<<< HEAD
    <>
    <Nav/> 
    <Feed/>
    
    </>
=======
<div>
  
  <Nav/>
  <Login/>   
  <ProfilePage/>
  <Contact/>
   

  
</div>     
>>>>>>> ed8f2604467b8b98b30cf7232ebb22aa8eb96f96
    
  );
}

export default App;