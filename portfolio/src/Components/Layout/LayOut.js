import React, { useState } from 'react';
import Home from '../Home/Home';
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs';
import Menu from '../Menu/Menu';

const LayOut = () => {
  const [toggle, setToggle] = useState(true);

  // change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className='sidebar-section'>
        <div className={toggle ? 'sidebar-toggle sidebar' : 'sidebar'}>
          <div className='sidebar-toggle-icons'>
            <Menu toggle={toggle} />
            <p className='arrow' onClick={handleToggle}>
              {toggle ? (
                <BsChevronDoubleLeft size={30} />
              ) : (
                <BsChevronDoubleRight size={30} />
              )}
            </p>
          </div>
        </div>
        <div className='container'>
          <Home />
        </div>
      </div>
    </>
  );
};

export default LayOut;
