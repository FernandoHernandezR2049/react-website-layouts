import React from "react";
import './SinglePriceGrid.scoped.css'
const SinglePriceGrid = () => {
    return (
        <div className="webpage">
            <section className="main-container">
                <div className="top">
                    <h2 className="main-header">Join our community</h2>
                    <h3 className="subheader">30-day, hassle-free money back guarantee</h3>
                    <p className="main-text">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
                </div>
                <div className="left-container">
                    <h3 className="secondary-header">Monthly Subscription</h3>
                    <p className="pricing"><span className="price">$29</span> <span>per month</span></p>
                    <p className="secondary-text">Full access for less than $1 a day</p>
                    <button className="sign-up">Sign Up</button>
                </div>
                <div className="right-container">
                    <h3 className="secondary-header">Why Us</h3>
                    <ul className="why-us">
                        <li className="why-us-item">Tutorials by industry experts</li>
                        <li className="why-us-item">Peer &amp; expert code review</li>
                        <li className="why-us-item">Coding exercises</li>
                        <li className="why-us-item">Access to our GitHub repos</li>
                        <li className="why-us-item">Community forum</li>
                        <li className="why-us-item">Flashcard decks</li>
                        <li className="why-us-item">New videos every week</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default SinglePriceGrid