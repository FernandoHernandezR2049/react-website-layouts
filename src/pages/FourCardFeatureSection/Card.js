import React from "react";
import './FourCardFeatureSection.scoped.css'

const Card = (props) => {
    const cardStyle = { borderTopColor: props.borderColor }
    return (
        <article className="feature-card" style={cardStyle}>
            <h3 className="feature-card-title">{props.cardTitle}</h3>
            <p className="feature-card-text">{props.cardText}</p>
            <img src={props.cardImage} alt='feature card' className="features-card-image" width='60px' />
        </article>
    )
}
export default Card;