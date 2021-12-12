import axios from "axios";

const showNotification = setter => {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
}
const getWord = (callback) => {
  axios.get('https://random-word-api.herokuapp.com/word?number=10', {headers})
  .then(response => callback(response.data))
  .catch(reason => {
      callback(false)
  })

}

const checkWin = (correct, wrong, word) => {
  let status = 'win';
  
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  if(wrong.length === 6) status = 'lose';
    return status
}

export {
  getWord,
  checkWin,
  showNotification
}