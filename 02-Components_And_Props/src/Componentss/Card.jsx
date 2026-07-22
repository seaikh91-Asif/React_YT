import React from "react"

const Card = (props) => {
    console.log(props); 
    return (
        <div className="card">
            <h1>{props.user}</h1>
            <img src="" alt="" />
            <p>{props.paragraph}</p>
            <button className="button">Click here</button>
        </div>
    )
}

export default Card