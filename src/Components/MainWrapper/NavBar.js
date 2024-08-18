import React, { useEffect, useState, useRef } from 'react'
import { FaBars } from "react-icons/fa6";
import {NavLink} from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import logo from "../../Assests/images/logo.png"
import { startProTrade } from '../Api/Api';

const NavBar = () => {

    const [navShow, setNavShow] = useState(false);
    const userDetailsRef = useRef(null);
    useEffect(() => {
        const windowSizeHandler = () => {
            if (window.innerWidth > 768) {
                setNavShow(false)
            }
        };
        window.addEventListener("resize", windowSizeHandler);
        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };

    }, []);

    return (
        <header>
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-3 col-md-2 navlogo">
                        <img src={logo} alt="load" className="zedge_logo" />
                    </div>
                    <nav className={navShow ? "col-3 active d-flex justify-content-center" : "col-md-7 d-flex justify-content-center"}>
                        <ul className="gap-lg-3">

                            <li>
                                <NavLink to="/dashboard" activeClassName="active" className="navlink">Dashboard</NavLink>
                            </li>

                            <li>
                                <NavLink to="/protrader" activeClassName="active" className="navlink">Protrader</NavLink>
                            </li>

                            <li>
                                <NavLink to="/" activeClassName="active" className="navlink">ADF</NavLink>
                            </li>

                        </ul>
                    </nav>
                    <div className="col-7 col-md-3 d-flex justify-content-between align-items-center">
                        <div className="col-5 col-md-6 p-0 d-flex">
                            <button className='start_btn px-2' >Multi-index analysis</button>
                        </div>
                        <div className="col-6 d-flex gap-1 justify-content-end align-items-center ps-0 ">

                            <div className="d-flex align-items-center gap-3">
                                <div className="name-panel">
                                    <div>Nishad</div>
                                </div>

                                <div className="dropdown right">
                                    <span className="avatar" ref={userDetailsRef}>
                                        <FaCircleUser size={28} className="nav_icon" />
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="menu-toggle col-1" onClick={() => setNavShow(!navShow)}>
                        <FaBars size={20} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar