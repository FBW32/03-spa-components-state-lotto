import React from 'react'


export default function Numbers (props) { 
    return (
        <div style={{width:"100px",height:"100px",border:"5px solid lightBlue", borderRadius:"50%",fontSize:"20px",lineHeight:"50px",textAlign:"center"}}>
            <h4>{props.number}</h4>
        </div>
    )}