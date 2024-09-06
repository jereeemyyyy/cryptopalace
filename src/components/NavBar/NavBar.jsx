import React from 'react'
import './NavBar.css'
import { FaLocationArrow } from "react-icons/fa6"
import { GiTakeMyMoney } from "react-icons/gi"



const NavBar = () => {

    return (
        <div className='navbar'>
            <div className='logo'>
                <GiTakeMyMoney />
                CryptoPalace
            </div>

            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>

            <div className="nav-right">
                <select>
                    <option value="usd">USD</option>
                    <option value="sgd">SGD</option>
                    <option value="eur">EUR</option>
                </select>

                <button>
                    Sign up
                    <FaLocationArrow/>
                </button>
            </div>
        </div>
    );
}

export default NavBar
