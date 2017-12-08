import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import Crossword from './components/Crossword';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('component App mounted!');

    this.removeAllH1Classes();
    this.startAnimationInterval();
  }

  removeAllH1Classes() {
    var h1s = document.getElementsByClassName('happyBirthday');

    Array.from(h1s).forEach(function(h1){
      $(h1).removeClass('active');
    });
  }

  startAnimationInterval() {
    let i = 0;
    const h1s = document.getElementsByClassName('happyBirthday');
    $(h1s[i]).addClass('active');

    setInterval(() => {
      console.log('TIC');
      this.removeAllH1Classes();
      i++;
      if (i < h1s.length) {
        $(h1s[i]).addClass('active');
      } else {
        i = 0;
        $(h1s[i]).addClass('active');
      }
    }, 1500);
  }

  render() {
    return (
      <div className="App">
        <div id="section-1">
          <div className="birthdayBox">
            <h1 className='happyBirthday yellow active'>Happy birthday</h1>
            <h1 className='happyBirthday orange'>Buon compleanno</h1>
            <h1 className='happyBirthday red'>Bon anniversaire</h1>
            <h1 className='happyBirthday pink'>Feliz cumpleaños</h1>
            <h1 className='happyBirthday violet'>Feliz aniversário!</h1>
            <h1 className='happyBirthday blue'>Alles Gute zum Geburtstag</h1>
            <h1 className='happyBirthday lightblue'>s dnem ​​rozhdeniya</h1>
            <h1 className='happyBirthday green'>Gelukkige verjaardag</h1>
          </div>
          <img src="./images/michi.jpg" alt="michela" />
        </div>
        <div id="section-2">
          <div className="top">
            <h1>Quiz time</h1>
          </div>
          <div className="bottom">
            <div className="quiz">
              <div className="question question-1">
                <div className="question-label">What is your favourite wear-style?</div>
                <input type="text" className="question-input" />
              </div>
              <div className="question question-2">
                <div className="question-label">What is your nationality?</div>
                <input type="text" className="question-input" />
              </div>
              <div className="question question-3">
                <div className="question-label">To be, said from yourself: <br /> for a hint click <a href="http://im.com/" target="__blank">here</a></div>
                <input type="text" className="question-input" />
              </div>
            </div>
          </div>
        </div>
        <div id="section-3">
          <div className="password">
            <h2>1| Take the answers, now put them together, what do you think it can be? Try to create a sentence.</h2>
            <h2>2| Now, make sure that you look better <br />at your birthday card, there is a key-pass hidden in the image.</h2>
            <h2>3| Now click on the button and discover it!</h2>
          </div>
          <div className="mail" onClick={() => {
            window.open('https://mail.google.com', '_blank');
          }}>
            OPEN
          </div>
        </div>
      </div>
    );
  }
}

export default App;
