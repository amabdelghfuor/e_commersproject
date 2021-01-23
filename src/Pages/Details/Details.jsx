import React,{useState,useRef,useContext} from 'react';
import Size from "../../Component/Size/Size";
import Color from "../../Component/Color/Color";
import Img from "../../Component/Img/Img";
import {useParams} from "react-router-dom";
import{MdAddShoppingCart} from 'react-icons/md';
import {DataContext} from "../../DataProvider";
import{Link} from "react-router-dom";

export default function Details() {
    const {id}=useParams();

    const value = useContext(DataContext);
    const {product}=value;
    const AddCart = value.AddCart;
    
    const [Index, setIndex] = useState(0);
    
    let R = (id-1);
    const con = product[0][R];
    
    const imgDiv = useRef();
    const handelMouseMove=(e)=>{
        const {left,top,width,height}=e.target.getBoundingClientRect();
        const x = (e.pageX-left)/width * 100;
        const y = (e.pageY-top)/height * 100;
        imgDiv.current.style.backgroundPosition =`${x}%${y}%`;
    }
   
    return(
        <div className = " container con">
             <div className="row">
                <div className ="col-lg-6 col-md-6 col-sm-12 img_a"
                    style={{backgroundImage:`url(${con.img[Index]})`}}
                    onMouseMove={handelMouseMove}
                    onMouseLeave={()=>imgDiv.current.style.backgroundPosition =`center`} 
                    ref={imgDiv}      
                >
                     
                 </div>
            
                 <div className ="col-lg-6 col-md-6 col-sm-12 det" >
                    <h1>{con.titele}</h1>
                    <Size size={con.size} />
                    <Color color={con.color} />
                    <h3>EGP {con.price}</h3>
                    <Img img={con.img} setIndex={setIndex} />
                    <Link to="/Cart">
                    <button onClick={()=>{AddCart(con.id)}} ><MdAddShoppingCart/></button>
                    </Link>

                 </div>
             </div>  
            
        </div>
    )
}
// onClick={()=>{AddToCart(con.id)}