
const Main = ({onCheck, guessedValue, setGuessedValue, message, score, highscoreRef, highscore, scoreRef, onAgain}) =>{
    return(
        <main>
            <section className="left">
                <input type="number" className="guess" value={guessedValue} onChange={e => setGuessedValue(e.target.value)}  />
                <button className="btn check" onClick={onCheck}>Check!</button>
            </section>
            <section className="right">
                <p className="message" >{message}</p>
                <p >Score: <span className="score" ref={scoreRef}>{score}</span></p>
                <hr />
                <p className="label-highscore">🥇High Score: <span className="highscore" ref={highscoreRef}>{highscore}</span></p>
            </section>
            <button className="btn again" onClick={onAgain}>Again!</button>
        </main>
    )
}

export default Main;