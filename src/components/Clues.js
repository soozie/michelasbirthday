import React from 'react';

export default class Clues extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ol className="clues">
        { this.props.clues.map(clueObject => <li className="clue">{clueObject.clue}</li>) }
      </ol>
    )
  }
}
