import React, {useContext} from 'react'
import './NavBar.css'
import { FaLocationArrow } from "react-icons/fa6"
import { GiTakeMyMoney } from "react-icons/gi"
import {CoinContext} from "../../context/CoinContext.jsx";
import { Link } from 'react-router-dom';



const NavBar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch(event.target.value) {
            case "usd": {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }

            case "sgd": {
                setCurrency({name: "sgd", symbol: "S$"})
                break;
            }

            case "eur": {
                setCurrency({name: "eur", symbol: "€"})
                break;
            }

            default: {
                setCurrency({name: "usd", symbol: "$"})
                break;
            }
        }
    }

    return (
        <div className='navbar'>
            <Link to={'/'}>
                <div className='logo'>
                    <GiTakeMyMoney/>
                    CryptoPalace
                </div>
            </Link>


            <ul>
                <Link to={'/'}>
                    <li>Home</li>
                </Link>

                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>

            <div className="nav-right">
                <select onChange={currencyHandler}>
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
