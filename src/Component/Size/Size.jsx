import React from 'react'

export default function Size({size}) {
    return (
        <ul className="ListInDetails">
            {size.map((s,i) =>{
                return <li key={i}>{s}</li>
            })}
        </ul>
    )
}
