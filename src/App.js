import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin, getWord } from './helpers/helpers';

import './App.css';

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [word, setWord] = useState([])
  const [selectedWord, setSelectedWord] = useState("")
  const [test, setTest] = useState([])

  useEffect(()=>{
    getWord(data=>{
      setWord(data)
      const random = Math.floor(Math.random() * word.length);
      setSelectedWord(data[random]);
    })
  },[])
  useEffect(() => {
    
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
         if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
  
    if(playable && correctLetters && wrongLetters){
      window.addEventListener('keyup', handleKeydown);
    }else{
      return
    }
      
    return () => window.removeEventListener('keyup', handleKeydown);
  }, [correctLetters, wrongLetters,playable]);

  const  playAgain = () => {

    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * word.length);
    setSelectedWord(word[random]);
    getWord(data=>{
      setWord(data)
    })
  }

  let visibility = "hidden"
 
  let letters  = selectedWord.split("")
  let uniqueLetters = letters.filter((item, i , arr) => arr.indexOf(item) === i)
  

  if(selectedWord.length !== 0 & (uniqueLetters.length - correctLetters.length) === 0){
    console.log(true)
    visibility = "visible"
  }else if(wrongLetters.length === 6){
    visibility = "visible"
  }

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup visibility={visibility} correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;