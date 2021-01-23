import React from 'react'

export default function Img({img,setIndex}) {
    return (
        <ul className="ListInDetailsImg">
            {img.map((s,i) =>{
                return <li onClick={()=>setIndex(i)} key={i}><img src={s} key={i}/></li>
            })}
        </ul>
    )
}
