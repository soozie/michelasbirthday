import React from 'react';
import Clues from './Clues.js';
import Boxes from './Boxes.js';
import Box from './Box.js';

export default class Crossword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clues: {
        across: [
          {
            number: 1,
            clue: "A responsive JavaScript library?",
            answer: "react"
          }
        ],
        down: [
          {
            number: 1,
            clue: "A method of making an element in the DOM",
            answer: "render"
          }
        ]
      },
      grid: [
        {
          id: "A1",
          letter: null
        },
        {
          id: "A2",
          letter: "h",
          across: true,
          clue_across: 1,
          down: true,
          clue_down: 1,
          number: 1
        },
        {
          id: "A3",
          letter: "i",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A4",
          letter: "p",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A5",
          letter: "p",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A6",
          letter: "i",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A7",
          letter: "e",
          across: true,
          clue_across: 1,
          down: false,
          clue_down: null
        },
        {
          id: "A8",
          letter: null
        },
        {
          id: "A8",
          letter: null
        },
        {
          id: "B1",
          letter: null
        },
        {
          id: "B2",
          letter: "t",
          across: false,
          clue_across: null,
          down: true,
          clue_down: 1
        },
        {
          id: "B3",
          letter: null
        },
        {
          id: "B4",
          letter: null
        },
        {
          id: "B5",
          letter: null
        },
        {
          id: "B6",
          letter: null
        },
        {
          id: "B7",
          letter: null
        },
        {
          id: "B8",
          letter: null
        },
        {
          id: "C1",
          letter: null
        },
        {
          id: "C2",
          letter: "a",
          across: false,
          clue_across: null,
          down: false
        },
        {
          id: "C3",
          letter: null
        },
        {
          id: "C4",
          letter: null
        },
        {
          id: "C5",
          letter: null
        },
        {
          id: "C6",
          letter: null
        },
        {
          id: "C7",
          letter: null
        },
        {
          id: "C8",
          letter: null
        },
        {
          id: "D1",
          letter: null
        },
        {
          id: "D2",
          letter: "l",
          across: false,
          clue_across: null,
          down: false
        },
        {
          id: "D3",
          letter: null
        },
        {
          id: "D4",
          letter: null
        },
        {
          id: "D5",
          letter: null
        },
        {
          id: "D6",
          letter: null
        },
        {
          id: "D7",
          letter: null
        },
        {
          id: "D8",
          letter: null
        },
        {
          id: "E1",
          letter: null
        },
        {
          id: "E2",
          letter: "i",
          across: false,
          clue_across: null,
          down: false
        },
        {
          id: "E3",
          letter: null
        },
        {
          id: "E4",
          letter: null
        },
        {
          id: "E5",
          letter: null
        },
        {
          id: "E6",
          letter: null
        },
        {
          id: "E7",
          letter: null
        },
        {
          id: "E8",
          letter: null
        },
        {
          id: "F1",
          letter: null
        },
        {
          id: "F2",
          letter: "a",
          across: false,
          clue_across: null,
          down: false
        },
        {
          id: "F3",
          letter: null
        },
        {
          id: "F4",
          letter: null
        },
        {
          id: "F5",
          letter: null
        },
        {
          id: "F6",
          letter: null
        },
        {
          id: "F7",
          letter: null
        },
        {
          id: "F8",
          letter: null
        },
        {
          id: "G1",
          letter: null
        },
        {
          id: "G2",
          letter: "n",
          across: false,
          clue_across: null,
          down: false
        },
        {
          id: "G3",
          letter: null
        },
        {
          id: "G4",
          letter: null
        },
        {
          id: "G5",
          letter: null
        },
        {
          id: "G6",
          letter: null
        },
        {
          id: "G7",
          letter: null
        },
        {
          id: "G8",
          letter: null
        },
        {
          id: "H1",
          letter: null
        },
        {
          id: "H2",
          letter: null
        },
        {
          id: "H3",
          letter: null
        },
        {
          id: "H4",
          letter: null
        },
        {
          id: "H5",
          letter: null
        },
        {
          id: "H6",
          letter: null
        },
        {
          id: "H7",
          letter: null
        }
      ]
    }
  }
  render() {
    return (
      <div className="crossword">
        <Boxes clues={this.state.clues} grid={this.state.grid} />
      </div>
    )
  }
}
