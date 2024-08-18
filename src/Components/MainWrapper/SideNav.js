import React from 'react'
import { MdQueryStats } from "react-icons/md";

const SideNav = ({isOpen}) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
            <div className="logo-side">{isOpen?"Indexes":<MdQueryStats />}</div>
        </div>
        <div className="sidebar-nav">
            {isOpen&&
            <ul className='sidebar-list'>
                <li>BANK NIFTY</li>
                <li>NIFTY</li>
                <li>FIN NIFTY</li>
                <li>MIDCP NIFTY</li>
                <li>SENSEX</li>
                <li>BANKEX</li>
            </ul>}
        </div>
    </div>
  )
}

export default SideNav