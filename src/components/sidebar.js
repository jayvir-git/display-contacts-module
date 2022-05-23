/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

const Sidebar = ({ sidebarStatus }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  useEffect(() => {
    setActiveLink(window.location.pathname);
    if (activeLink === '/sent-sms' || activeLink === '/sms-summary') {
      setToggleMenu(true);
    }
  }, [activeLink]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={sidebarStatus ? 'sidebar' : 'sidebar close'}>
      <div className='logo-details'>
        <img src='assets/img/logo.png' alt='' className='img-fluid' />
        <span className='logo_name'>SkyoLane</span>
      </div>

      <ul className='nav-links '>
        <li className={activeLink === '/' ? 'active' : ''}>
          <a href='/'>
            <img src='assets/img/dashborad.png' className='img-fluid' alt='' />
            <span className='link_name'>Send SMS</span>
          </a>
          <ul className='sub-menu blank'>
            <li>
              <a className='link_name' href='index.php'>
                Send SMS
              </a>
            </li>
          </ul>
        </li>

        <li
          className={toggleMenu ? 'showMenu active' : ''}
          onClick={() => setToggleMenu(!toggleMenu)}
          id='toggleMenu'
        >
          <div className='iocn-link arrow'>
            <a>
              <img
                src='assets/img/dashborad.png '
                className='img-fluid '
                alt=' '
              />
              <span className='link_name '>Delivry Report</span>
            </a>
            <img
              src='assets/img/Arrow-dwon.png'
              className='droarr img-fluid '
              alt=' '
            />
          </div>
          <ul className='sub-menu '>
            <li>
              <a className='link_name ' href='#'>
                Delivry Report
              </a>
            </li>
            <li>
              <a
                href='/sent-sms'
                className={
                  activeLink === '/sent-sms'
                    ? 'link_nameactiv color-blue'
                    : 'link_nameactiv'
                }
              >
                Sent SMS
              </a>
            </li>
            <li>
              <a
                href='/sms-summary'
                className={
                  activeLink === '/sms-summary'
                    ? 'link_nameactiv color-blue'
                    : 'link_nameactiv'
                }
              >
                SMS Summary
              </a>
            </li>
          </ul>
        </li>

        <li className={activeLink === '/contacts' ? 'active' : ''}>
          <a href='/contacts'>
            <img
              src='assets/img/dashborad.png '
              className='img-fluid'
              alt=' '
            />
            <span className='link_name '>Contacts</span>
          </a>
          <ul className='sub-menu blank '>
            <li>
              <a className='link_name ' href='contacts.php'>
                Contacts
              </a>
            </li>
          </ul>
        </li>

        <li className={activeLink === '/templates' ? 'active' : ''}>
          <a href='/templates'>
            <img
              src='assets/img/dashborad.png '
              className='img-fluid '
              alt=' '
            />
            <span className='link_name '>Templates</span>
          </a>
          <ul className='sub-menu blank '>
            <li>
              <a className='link_name ' href='# '>
                Templates
              </a>
            </li>
          </ul>
        </li>

        <li className={activeLink === '/dlt-headers' ? 'active' : ''}>
          <a href='/dlt-headers'>
            <img
              src='assets/img/dashborad.png '
              className='img-fluid '
              alt=' '
            />
            <span className='link_name '>DLT & Header</span>
          </a>
          <ul className='sub-menu blank '>
            <li>
              <a className='link_name ' href='# '>
                DLT & Header
              </a>
            </li>
          </ul>
        </li>

        <li className={activeLink === '/api' ? 'active' : ''}>
          <a href='/api'>
            <img
              src='assets/img/dashborad.png '
              className='img-fluid '
              alt=' '
            />
            <span className='link_name '>API</span>
          </a>
          <ul className='sub-menu blank '>
            <li>
              <a className='link_name ' href='# '>
                API
              </a>
            </li>
          </ul>
        </li>

        <li onClick={handleLogout}>
          <a href=' '>
            <img
              src='assets/img/dashborad.png '
              className='img-fluid '
              alt=' '
            />
            <span className='link_name '>Log Out</span>
          </a>
          <ul className='sub-menu blank '>
            <li>
              <a className='link_name ' href=' '>
                Log Out
              </a>
            </li>
          </ul>
        </li>

        <li>
          <div className='profile-details d-flex align-items-center '>
            <a href='/update-profile' className='profile_name '>
              Manage Profile
            </a>
            <img src='assets/img/dashborad.png' alt='' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
