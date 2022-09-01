import React from 'react';
import Navbar from '../Components/Navbar';
import Posts from '../Components/Posts';
import SuggestionBox from '../Components/SuggestionBox';
const Home = () => {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section className='d-flex justify-content-center'>
        <Posts />
        <SuggestionBox />
      </section>
    </main>
  );
};

export default Home;
