import React from 'react';
import { NavLink } from 'react-router-dom';
import './hambuger.css';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = () => {
  const closeside=useNavigate();
  return (
      <>       
         <nav className='nav'>
             <div > 
                 <h5 style={{color:'whitesmoke',fontFamily:'cursive',fontWeight:'bold',fontSize:'25px'}}>Products
                </h5>
             </div>
             
                <div className="hamburger-menu" style={{marginTop:'20px'}}>
                      <input id="menu__toggle" type="checkbox" />
                      <label className="menu__btn" htmlFor="menu__toggle">
                      <span></span>
                    </label>
                    <ul className="menu__box">
          <li className="items">
            <label
              htmlFor="menu__toggle"
              role="button"
              className="menu__item"
              onClick={()=>{closeside("/productlist", { replace: true })}}
            >
             Product List
            </label>
          </li>
          <li className="items">
          <label
              htmlFor="menu__toggle"
              role="button"
              className="menu__item"
              onClick={()=>{closeside("/addproduct", { replace: true })}}
            >
             Add Product
            </label>
          </li>
        </ul>
                 
            </div>
        
           </nav> 
      </>
  )
}

export default HamburgerMenu