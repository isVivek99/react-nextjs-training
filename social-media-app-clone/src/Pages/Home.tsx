import React from 'react';
import Navbar from '../Components/Navbar';
import NavbarMobile from '../Components/NavbarMobile';
import NavbarMobileBottom from '../Components/NavbarMobileBottom';
import PostsUI from '../Components/Posts';
import SuggestionBox from '../Components/SuggestionBox';
import MultiCarousel from '../Components/MultiCarousel';

import { withAuthenticationRequired } from '@auth0/auth0-react';
const Home = () => {
  return (
    <main>
      <section style={{ position: 'relative' }}>
        <div className='d-none d-md-block'>
          <Navbar />
        </div>
        <div className='d-block d-md-none'>
          <NavbarMobile />
        </div>
      </section>
      <section className='d-md-flex justify-content-center '>
        <div className='d-md-flex align-items-center flex-column '>
          <MultiCarousel />
          <PostsUI />
        </div>
        <div className='d-none d-lg-block'>
          <SuggestionBox />
        </div>
      </section>
      <div className='d-block d-md-none'>
        <NavbarMobileBottom />
      </div>
    </main>
  );
};

export default withAuthenticationRequired(Home);
