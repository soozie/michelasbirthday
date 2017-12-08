import React from 'react';
import Box from './Box.js';

export default class Boxes extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
    answers: {
      across: props.clues.across.map((clue) => {
        return this.initClueData(clue);
      }),
      down: props.clues.down.map((clue) => {
        return this.initClueData(clue);
      })
    },
    answer: 'react',
    correctLetters: 0
   };

   this.handleCorrectGuess = this.handleCorrectGuess.bind(this);
   this.handleIncorrectGuess = this.handleIncorrectGuess.bind(this);
 }
 initClueData(data) {
   return {
     answer: data.answer,
     correct: 0,
     solved: false
   }
 }
 handleCorrectGuess(cluesToUpdate) {
   for (const clue of cluesToUpdate) {
     debugger;
     const clueIndex = clue.number - 1;
     let currentState = this.state.answers;
     let currentClueObject = currentState[clue.direction][clueIndex];
     currentClueObject.correct++;

     if (currentClueObject.correct === currentClueObject.answer.length) {
       currentClueObject.solved = true;
       console.log('hooray!');
     }

     currentState[clue.direction][clueIndex] = currentClueObject;

     this.setState({
       answers: currentState
     });

   }
 }
 handleIncorrectGuess() {
   if (this.state.correctLetters > 0) {
     this.setState({
       correctLetters: this.state.correctLetters - 1
     });
   }
 }
 render() {
   return (
    <div className="boxes">
       { this.props.grid.map(box => <Box key={box.id} letter={box.letter} across={box.across} clueAcross={box.clue_across} down={box.down} number={box.number} clueDown={box.clue_down} answers={this.state.answers} onCorrect={this.handleCorrectGuess} onIncorrect={this.handleIncorrectGuess} />)}
     </div>
   )
 }
}
