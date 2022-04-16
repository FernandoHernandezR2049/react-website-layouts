import React from "react";
import Card from "./Card";
import './FourCardFeatureSection.scoped.css'
import supervisor from './icon-supervisor.svg'
import team from './icon-team-builder.svg'
import karma from './icon-karma.svg'
import calculator from './icon-calculator.svg'

const FourCardFeatureSection = () => {
    return (
        <div className="fourCardFeatureSection">
            <h2 className="page-title">Reliable, efficient delivery</h2>
            <h2 className="page-title--bold"><span>Powered by Technology</span></h2>
            <p className="main-text">Our Artificial Intelligence powered tools use millions of project data points
                to ensure that your project is successful</p>
            <div className="four-card-container">
                <Card cardTitle={'Supervisor'} borderColor='hsl(180, 62%, 55%)' cardText={'Monitors activity to identify project roadblocks'} cardImage={supervisor} />
                <div className="two-card-container">
                    <Card cardTitle={'Team builder'} borderColor='hsl(0, 78%, 62%)' cardText={'Scans our talent network to create the optimal team for your project'} cardImage={team} />
                    <Card cardTitle={'Karma'} borderColor='hsl(34, 97%, 64%)' cardText={'Regularly evaluates our talent to ensure quality'} cardImage={karma} />
                </div>
                <Card cardTitle={'Calculator'} borderColor='hsl(212, 86%, 64%)' cardText={'Uses data from past projects to provide better delivery estimates'} cardImage={calculator} />
            </div>

        </div>
    )
}
export default FourCardFeatureSection