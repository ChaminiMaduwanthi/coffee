import React from 'react';
import  "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Features from './components/features/Features';
import Menu from './components/menu/Menu';
import Choose from './components/choose/Choose';
import Stats from './components/stats/Stats';
import Gallery from './components/gallery/Gallery';
import Offer from './components/offer/Offer';
import Chef from './components/chef/Chef';
import Reservation from './components/reservation/Reservation';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

function App() {
  return <>
  <Header />
  <Home />
  <About />
  <Features/>
  <Menu/>
  <Choose/>
  <Stats/>
  <Gallery/>
  <Offer/>
  <Chef/>
  <Reservation/>
  <Testimonials/>
  <Contact/>
  </>
}

export default App
