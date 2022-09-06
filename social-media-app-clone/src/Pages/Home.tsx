import React from 'react';
import Navbar from '../Components/Navbar';
import PostsUI from '../Components/Posts';
import SuggestionBox from '../Components/SuggestionBox';
import MultiCarousel from '../Components/MultiCarousel';

import { withAuthenticationRequired } from '@auth0/auth0-react';
const Home = () => {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section className='d-flex justify-content-center '>
        <div className='d-flex align-items-center flex-column '>
          <MultiCarousel />
          <PostsUI />
        </div>
        <div className='d-none d-lg-block'>
          <SuggestionBox />
        </div>
      </section>
    </main>
  );
};

export default withAuthenticationRequired(Home);
