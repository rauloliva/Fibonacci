import React, {useState} from 'react'


const Navbar = (props) => {
    const {selectedTab, changeTab} = props

    return (
        <nav className="nav">
            <a href="#" className="menu_option" onClick={() => changeTab('home')} >Home</a>
            <a href="#" className="menu_option" onClick={() => changeTab('exercise')} >Exercise</a>
        </nav>
    )   
}

export default Navbar