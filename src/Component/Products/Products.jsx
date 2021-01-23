import React,{useContext} from 'react';
import Card from "../../Component/Card/Card";
import {DataContext} from "../../DataProvider";

export default function Products() {
    const value = useContext(DataContext);
    const {product} = value;
    const AddCart = value.AddCart;
    return (
        <div className="row d-flex justify-content-center">
            {product[0].map((Product)=>
            <div key={Product.id} className="col-lg-4 col-md-6 col-sm-12">
                <Card Product={Product} AddCart={AddCart}/>
            </div>
            )}
        </div>
    )
}
    
    
// d-flex justify-content-center