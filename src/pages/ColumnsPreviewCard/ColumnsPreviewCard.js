import React from "react";
import Card from './Card'
import './ColumnsPreviewCard.css'
import sedan from './icon-sedans.svg'
import suv from './icon-suvs.svg'
import luxury from './icon-luxury.svg'

const ColumnsPreviewCard = () => {
    return (
        <div className="main-container">
            <div className="cards-container">
                <Card btnText='orangeText' cardColor={'hsl(31, 77%, 52%)'} cardImg={sedan} cardTitle={'sedans'} cardMainText={'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'} />
                <Card btnText='cyanText' cardColor={'hsl(184, 100%, 22%)'} cardImg={suv} cardTitle={'suvs'} cardMainText={'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'} />
                <Card btnText='darkCyanText' cardColor={'hsl(179, 100%, 13%)'} cardImg={luxury} cardTitle={'luxury'} cardMainText={'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'} />
            </div>
        </div>
    )
}
export default ColumnsPreviewCard;