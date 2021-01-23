import React,{useState,useContext} from 'react';
import { ImCart } from 'react-icons/im';
import{FiLogIn} from 'react-icons/fi';
import{ImMenu2} from 'react-icons/im';
import{Link} from "react-router-dom";
import {DataContext} from "../../DataProvider";

export default function Header() {

     const value = useContext(DataContext);
    const {cart} = value;
    
    const [toggel, settoggel] = useState(0);

    const  toggele =()=> {
        {toggel=== -900 ?settoggel(0):settoggel(-900)}
    };
    
    return (
    <header>
        <div className="header">
            <div className="logo">
                <Link to="/" className="navbar-brand" href="#">OnlinShop</Link>
            </div>
            <div className="cart_sing_in">
                <h5>
                    <span>
                        login <FiLogIn/>
                    </span>
                    <span>
                        <Link to="/Cart">
                                <ImCart/>
                            <span>
                                {cart[0].length}
                            </span>
                        </Link>
                    </span>
                </h5>
            </div>
            <button onClick={toggele} className="menu">
                <ImMenu2/>
            </button>
        </div>
        <nav style={{transform:`translateX(${toggel}px)`}}>
            <ul>
                <button className="li"  onClick={toggele}>X</button>
                <li ><a>Home</a></li>
                <li ><a>Apout</a></li>
                <li ><a>contact</a></li>
            </ul>
        </nav>
    </header>
    )
}
//<MdAddShoppingCart/>
// import{MdAddShoppingCart} from 'react-icons/md';