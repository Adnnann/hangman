import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin, getWord } from './helpers/helpers';

import './App.css';

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [word, setWord] = useState([])
  const [selectedWord, setSelectedWord] = useState("")

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

  function playAgain() {

    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * word.length);
    setSelectedWord(word[random]);
  }
console.log(selectedWord)
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;