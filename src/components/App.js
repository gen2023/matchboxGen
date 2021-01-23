import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
// import Common from './Common';
import Footer from './Footer';

import '../../node_modules/modern-normalize/modern-normalize.css';
// import './StylesComponents.css';
import '../Pages/stylePage.css';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Footer />
    </>
  );
}

export default App;
