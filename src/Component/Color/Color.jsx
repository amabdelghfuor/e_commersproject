import React from 'react'

export default function Color({color}) {
    return (
        <ul className="ListInDetailscolor">
            {color.map((s,i) =>{
                return <li style={{backgroundColor:`${s}`}} key={i}></li>
            })}
        </ul>
    )
}
