import React, { useState } from 'react';
import Sidebar from './sidebar';
const Menubar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(true);

  return (
    <>
      <Sidebar sidebarStatus={sidebarStatus} />
      <section className='container-fluid home-section-menu py-3 px-md-3 px-0 d-flex align-items-center justify-content-center'>
        <div className='row w-100 align-items-center'>
          <div
            className='col-sm-4 col-6  menu-btn order-lg-0 order-2 text-lg-left text-right'
            onClick={() => setSidebarStatus(!sidebarStatus)}
          >
            <img src='assets/img/menuicon.png' className='bx-menu' alt='' />
          </div>
          <div className='col-sm-4 col-6 wuser text-center order-lg-0 order-1 d-none d-sm-block '>
            Welcome <span>Test User (Company Name)</span>
          </div>
          <div className='col-sm-4 col-6 info text-lg-right text-left pr-lg-0'>
            <div className='binfo'>
              Balance : <span>1000</span>
            </div>
            <div className='expinfo'>
              Exp at : <span>23-01-2022</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menubar;
