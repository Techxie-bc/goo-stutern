import React from 'react';
import SearchBar from './SearchBar';

// Header component
function Header() {
  return (
    <div className="gooBody">
      <div>
        <Top />
      </div>
      <div className="logoDiv">

      <Logo />
      <SearchBar />
      </div>
      <div className="langDiv">
        <SearchButton />
        <Languages />
      </div>
    </div>
  );
}
// top component
function Top(){
  return (
    <nav>
      <h3>Gmail</h3>
      <h3>Images</h3>
      <button className="cBtn">C</button>
    </nav>
  )
}
// Logo component
function Logo() {
  return (
    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo" />
  );
}


// SearchButton component
function SearchButton() {
  return (
    <div>

      <button>Google Search</button>
      <button>I'm feeling Lucky</button>
    </div>
  );
}


function Languages() {
  return (
    <div className="langBody">
      <div><p>Google offered in:</p></div>
      <ul>
        <li><a href="#">Ede Yoruba</a></li>
        <li><a href="#">Igbo</a></li>
        <li><a href="#">Hausa</a></li>
        <li><a href="#">Nigerian Pidgin</a></li>
      </ul>
    </div>
  );
}


export default Header;


