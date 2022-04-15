import './hamburgers.css'

const Hamburger = (props) => {
    const hamburgerClasses = "hamburger hamburger--collapse " + (props.isActive ? "is-active" : "");
    return (

        <button className={hamburgerClasses} type="button" onClick={props.handleClick}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )

}
export default Hamburger;