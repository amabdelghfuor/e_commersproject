import React,{useState,useContext,useEffect} from 'react';
import Size from "../../Component/Size/Size";
import Color from "../../Component/Color/Color";
import{MdDelete} from 'react-icons/md';
import{Link} from "react-router-dom";

import {DataContext} from "../../DataProvider";

export default function Cart() {

    const value = useContext(DataContext);
    const [Cart, setCart]= value.cart;
    const [total, settotal] = useState(0);    
 
    useEffect(()=>{
        const getTotale =()=>{
            const  res = Cart.reduce((prev,item)=>{
                return prev + (item.price * item.count)
            },0) 
            settotal(res);
        }
        getTotale()
    },[Cart]);
    const removProduct = (id) =>{
        if (window.confirm("DO you want to delete this Product ?")) {
            Cart.forEach((item,i) => {
                if (item.id===id) {
                    Cart.splice(i,1)
                }
            })
            setCart([...Cart]);
        }
    }
    
    const reduction =(id)=>{
        Cart.forEach((item) => {
            if (item.id===id) {
                item.count === 1 ? item.count = 1 : item.count -= 1 ;
            }
        })
        setCart([...Cart])
    }

    const increase =(id)=>{
        Cart.forEach((item) => {
            if (item.id===id) {
                item.count += 1 ;
            }
        })
        setCart([...Cart])
    }
    

    
    if (Cart.length === 0) {
        return(<h1 style={{ width:"100%",textAlign:"center",margin:"250px 0" }}>Cart is Empty</h1>);
    }else{

        return(
            <div className = " container con">
                     {Cart.map((items)=>{
                         return(
                            <div className="row border-bottom border-dark" key={items.id}>
                                <div className ="col-lg-6 col-md-6 col-sm-12 img_a"
                                    style={{backgroundImage:`url(${items.img[0]})`, backgroundSize:400, cursor:'default'}}>
                                     
                                </div>
                                <div className ="col-lg-6 col-md-6 col-sm-12 det" >
                                    <h1>{items.titele}</h1>
                                    <Size size={items.size} />
                                    <Color color={items.color} />
                                    <h3>EGP {items.price}</h3>
                                    <div className="amount">
                                        <button className="count"onClick={()=>increase(items.id)}> + </button>
                                            <span>{items.count}</span>
                                        <button className="count" onClick={()=>reduction(items.id)}> - </button>
                                    </div>
                                </div>
                                <button className="delete" onClick={()=>removProduct(items.id)}><MdDelete/></button>
    
                            </div>  
                        );
                     })}   
                <div className="total">
                    <h3>Total : EGP {total}</h3>   
                    <Link to="/Payment">Payment</Link> 
                </div>         
            </div>
        )
    }
}






