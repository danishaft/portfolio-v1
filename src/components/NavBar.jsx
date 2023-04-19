import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/projectContext'
import Footer from './Footer'
const NavBar = () => {
  const {toggleOn, toggler} = useContext(Context)
  toggleOn === true ? document.body.classList.add('mobile-nav-color') :  document.body.classList.remove('mobile-nav-color')
  console.log(toggleOn)
  return (
    <>
      <header className='flex justify-between py-3 relative top-0'>
          <div>
          <Link to="/"><h1 className=" tracking-wider text-center">EJEH DANIEL</h1></Link>
          </div>
        <div className={`menu-btn ${toggleOn && "open"} sm:visible md:invisible lg:invisible`} onClick={toggler} >   
          <div className="menu-btn-item"></div>
        </div>
        <div className="main-nav hidden md:block">
            <ul className='nav-list-d flex gap-10 items-center justify-around'>
              <li><Link to="/">Home</Link></li>
              <li><a href='#works'>Works</a></li>
              <li><a href='#about'>About</a></li>
              <li><Link to='/blog'>Inspo</Link></li>
            </ul>
        </div>
      </header>
      {toggleOn &&
      <div className='mobile-nav absolute w-full h-screen flex flex-col items-center justify-between py-10 bottom-0 top-11'>
        <ul className='nav-list flex flex-col gap-9 items-center w-full justify-between'>
          <li onClick={toggler}><Link to="/">Home</Link></li>
          <li onClick={toggler}><a href='#works'>Works</a></li>
          <li onClick={toggler}><a href='#about'>About</a></li>
          <li onClick={toggler}><Link to='/blog'>Inspo</Link></li>
        </ul>
        <Footer />
      </div> 
      }
    </>
  )
}

export default NavBar