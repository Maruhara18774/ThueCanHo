import React from 'react';
import Cards from '../paner-form/Cards';
import Navbar from '../paner-form/Navbar';
function Home() {
  return (
    <div style={{ backgroundImage: "url(/images/img-home.jpg)" }}>
      <Navbar/>
      <Cards />
    </div>
  );
}

export default Home;
