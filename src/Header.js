
const Header = ({number, numberRef}) =>{
    return(
        <header>
            <h1 className="h1">Guess my number</h1>
            <p>(Between 1 and 20)</p>
            <div ref={numberRef} className="number">{number}</div>
        </header>
    )
}

export default Header;