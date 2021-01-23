import React,{useContext} from 'react';
import {DataContext} from "../../DataProvider";
import{Link} from "react-router-dom";
import{MdAddShoppingCart} from 'react-icons/md';


export default function Card({Product,AddCart}) {
    const {AddToCart} = useContext(DataContext);

    return (
        <div className="card">
            <Link to={`/Content/${Product.id}`}>
                <div>
                    <img  src={Product.img[0]} />
                </div>
            </Link>
            <h3>EGP {Product.price}</h3>
            <button to="/Cart" onClick={()=>{AddCart(Product.id)}} ><MdAddShoppingCart/></button>
        </div>
    )
}
