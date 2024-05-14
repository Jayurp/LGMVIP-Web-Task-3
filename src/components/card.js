import React, { useState, useEffect } from "react";
import "./card.css";

const Card = ({obj}) => {
    const [skills, setSkills] = useState("");

    useEffect(() => {
        let str = ""; 
        for(let key in obj["skills"])
            {
                if(obj["skills"][key] == true)
                {
                    str += key +" ";
                }
            }
        setSkills(str);
    }, []);

    return(
        <div className="card">
            <div className="info">
                <b>{obj.name}</b><br/>
                {obj.gender}<br/>
                {obj.email}<br/>
                <a href={obj.website}>{obj.website}</a><br/>
                {skills}
            </div>
            <div className="cardImage">
                <img src={obj.image} alt="Example" className="imgSrc"></img>
            </div>
        </div>
    );
}

export default Card;