import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Carte from './components/carte/Carte';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
	  <Carte id={1} image='https://media.licdn.com/dms/image/C4D03AQG_aU7AHa4Suw/profile-displayphoto-shrink_200_200/0/1660736996954?e=1696464000&v=beta&t=vrF8MOHnwfH7pRkqSWSjb7wDaVYRuBzRtadHmpilm5Y' name='Fidèle' age={25} civil='Siligbonon' ville='Lyon' />
	  <Footer/>
    </div>
  );
}

export default App;
