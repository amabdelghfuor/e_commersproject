import React from 'react';
import Slider from "../../Component/Slider/Slider";
import Products from "../../Component/Products/Products";


export default function Home() {
    return (
        <div className="container-fluid con ">
            <div className="row">
                <Slider/>
            </div>
            <div className="row">
                <div className="product_content">
                        <p>products</p> 
                </div>
            </div>
            <div className="container-fluid">
                <Products/>
            </div>
        </div>
    )
}
