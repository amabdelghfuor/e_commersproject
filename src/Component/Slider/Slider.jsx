import React,{useState} from 'react';
import{RiArrowRightSLine} from 'react-icons/ri';
import{RiArrowLeftSLine} from 'react-icons/ri';
import data from "../../data.json";

export default function Slider() {
    const {slider} =data;
    // let sliderArr =[slider[0].id,slider[1].id,slider[2].id,slider[3].id];

    const [x, setx] = useState(0);
    const goL=()=>{

        {x === 0 ?  setx(-100 * (slider.length - 1)):setx(x+100)};

    }
    // setTimeout(()=>{
    //     {x === -100 * (slider.length - 1) ?  setx(0):setx(x-100)};
    // },7000)

    const goR=()=>{
        {x === -100 * (slider.length - 1) ?  setx(0):setx(x-100)};
        
    }
    return (
        <div className="slider">
            {slider.map((items)=>{
                return(
                    <div key={items.id} className="slide" style={{transform:`translateX(${x}%)`}}>
                            <img src={items.img}/>
                        <div>
                            {/* <p>{items.id}</p> */}
                            <h1>{items.titele}</h1>
                        </div>
                    </div>
                );
            })}
            <button className="goL" onClick={goL}><RiArrowLeftSLine/></button>
            <button className="goR" onClick={goR}><RiArrowRightSLine/></button>
        </div>
    )
}
