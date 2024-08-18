import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar';
import SideNav from './SideNav';

const MainWrapper = () => {
    const [isOpen, setIsOpen] = useState(true);
 
    useEffect(() => {
        const windowSizeHandler = () => {
            if(window.innerWidth<768){
                setIsOpen(false)
            }   
        };
        windowSizeHandler()
        window.addEventListener("resize", windowSizeHandler);
        return () => {
        window.removeEventListener("resize", windowSizeHandler);
        };
       
    }, []);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
  return (
    <>

    <section className="main">
        <NavBar/>
        <SideNav isOpen={isOpen}/>
        <div className={!isOpen?"menu active":"menu"} onClick={toggleSidebar}>
            {isOpen&&<GiHamburgerMenu />}
            {!isOpen&&<GiHamburgerMenu />}
        </div>
        <div className={!isOpen?"main-wrap active":"main-wrap"}>
            <Outlet />
        </div>
    </section>
    </>
  )
}

export default MainWrapper