import "./HeroStyle.css";

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img src={props.heroImg}/>
                {/* <video src={props.heroVi} autoPlay loop muted/> */}
                {/* {props.heroVi ? (
                    <video src={props.heroVi} autoPlay loop muted />
                ) : (
                    <img src={props.heroImg} />
                )} */}
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        </>
    )
}

export default Hero;