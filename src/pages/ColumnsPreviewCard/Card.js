import React from "react";
import './ColumnsPreviewCard.scoped.css'

const Card = (props) => {
    const btnClass = `card_btn ${props.btnText}`
    return (
        <div className="card" style={{ backgroundColor: props.cardColor }}>
            <img src={props.cardImg} alt="sedan icon" width="50px" />
            <h3 className="card_title">{props.cardTitle}</h3>
            <p className="card_text">{props.cardMainText}</p>
            <button className={btnClass}>Learn More</button>

        </div>
    )
}
export default Card