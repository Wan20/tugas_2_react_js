import React, { Component } from 'react';
import Header from './Page/Header';
import Footer from './Page/Footer';
import MenuUtama from './Page/MenuUtama';
import MenuMakanan from './Page/MenuMakanan';
import MenuTentangKami from './Page/MenuTentangKami';
import MenuKontak from './Page/MenuKontak';

class App extends Component {
 render() {
    return (
      <div>
        <Header />
        <br />
        <MenuUtama />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
      </div>
    );
 }
}

export default App;