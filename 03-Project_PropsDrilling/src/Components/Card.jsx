import React from "react";
import { Bookmark } from 'lucide-react';


 function Card(props) {
    return (
        <>
        <div className="card">
            <div>
                <div className="top">
                <img src= {props.brandLogo} alt="Amazon Logo" className="logo_img" />

                <button className="save_button">Save<Bookmark size={13} /></button>
            </div>

            <div className="center">
                <h3>{props.company}<span> {props.datePosted} </span></h3>
                <h2>{props.post}</h2>

                <div className="tag">
                    <button>{props.tag1}</button>
                    <button>{props.tag2}</button>
                </div>
            </div>
            </div>

            <div className="bottom">
                <div>
                    <h3>{props.pay}</h3>
                     <p>{props.location}</p>
                    
                </div>
               <button>Apply now</button>
            </div>
        </div>
        </>
    )
}

export default Card