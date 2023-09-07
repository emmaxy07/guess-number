import './App.css';
import Header from './Header';
import Main from './Main';
import { useState, useRef, useEffect } from 'react';
//Ekene

function App() {
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [guessedValue, setGuessedValue] = useState("");
  const [message, setMessage] = useState("Start Guessing...");
  const [number, setNumber] = useState("?");
  const [backgroundColor, setBackgroundColor] = useState("#222");
  const [secretNumber, setSecretNumber] = useState(generateSecretNumber());

  const numberRef = useRef(null);
  const highscoreRef = useRef(null);
  const scoreRef = useRef(null);

  function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
  }

  console.log(secretNumber);

  useEffect(() => {
    if (guessedValue === secretNumber.toString()) {
      numberRef.current.style.width = '30rem'; // Manipulate the style when the guess matches secretNumber
    }
  },[guessedValue, secretNumber]);


  const displayMessage = (message) =>{
      setMessage(message);
  }

  const onCheck = () =>{
      const guess = Number(guessedValue);
      
      if(!guess){
          displayMessage("No number");
      } else if(guess === secretNumber){
          displayMessage("Correct Number!");
          setNumber(secretNumber);
          setBackgroundColor("#60b347");

          if(score > highscore){
            setHighscore(score);
            highscoreRef.current.textContent = score;
          }
      } else if(guess !== secretNumber){
        if(score > 1){
          guess > secretNumber ? displayMessage("📈 Too high!") : displayMessage("📉 Too low!");
          const currentScore = setScore(score - 1);
          scoreRef.current.textContent = currentScore;
        } else {
          displayMessage('💥 You lost the game!');
          scoreRef.current.textContent = 0;
        }
      }
  }

  const onAgain = () =>{
    setScore(20);
    setHighscore(0);
    displayMessage('Start guessing...');
    setGuessedValue("");
    setMessage("Start Guessing...");
    setNumber("?");
    setBackgroundColor("#222");
    setSecretNumber(generateSecretNumber());
  }



  return (
    <div style={{ backgroundColor }}>
      <Header number={number} secretNumber={secretNumber} numberRef={numberRef} />
      <Main onCheck={onCheck} guessedValue={guessedValue} setGuessedValue={setGuessedValue} message={message} highscoreRef={highscoreRef} score={score} scoreRef={scoreRef} highscore={highscore} onAgain={onAgain} />
    </div>
  );
}

export default App;
