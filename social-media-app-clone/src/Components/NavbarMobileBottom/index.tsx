import React from 'react';
import './styles.scss';

const NavbarMobileBottom = () => {
  return (
    <section className='navbar-mobile-bottom '>
      <div className='d-flex justify-content-center'>
        <div className='p-3 ' style={{ flexGrow: 1 }}>
          <i className='fas fa-house f-24 fa-inactive'></i>
        </div>
        <div className='p-3' style={{ flexGrow: 1 }}>
          <i className='fas fa-paper-plane f-24 fa-inactive'></i>
        </div>
        <div className='p-3' style={{ flexGrow: 1 }}>
          <i className='fas fa-square-plus f-24 fa-inactive'></i>
        </div>
        <div className='p-3' style={{ flexGrow: 1 }}>
          <i className='fas fa-compass f-24 fa-inactive'></i>
        </div>
        <div className='p-3' style={{ flexGrow: 1 }}>
          <i className='fas fa-heart f-24 fa-inactive'></i>
        </div>
        <div
          className='my-2 list_user_img dropdown-toggle'
          style={{ flexGrow: 1 }}
        >
          <img
            src={
              process.env.PUBLIC_URL +
              '/assets/images/profile-pics/insta-dp.jpeg'
            }
            style={{ width: '32px' }}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default NavbarMobileBottom;
