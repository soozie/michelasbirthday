import React from 'react';

export default class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      isCorrect: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value === this.props.letter && !this.state.isCorrect) {
      this.setState({
        value: event.target.value,
        isCorrect: true
      });

      let cluesToUpdate = [];
      if (this.props.across) {
        cluesToUpdate.push({
          direction: "across",
          number: this.props.clueAcross
        });
      }

      if (this.props.down) {
        cluesToUpdate.push({
          direction: "down",
          number: this.props.clueDown
        });
      }

      this.props.onCorrect(cluesToUpdate);
    }
    else if (this.state.isCorrect && this.state.value && event.target.value !== this.props.letter) {
      this.setState({
        value: event.target.value,
        isCorrect: false
      });

      this.props.onIncorrect();
    }
  }

  render() {
    if (!this.props.letter) {
      return (
        <div className="box blank"></div>
       )
    }
    if (this.props.number) {
      return (
        <div className="box-wrapper">
          <label className="box-label box-label--number">{this.props.number}</label>
          <input type="text" onChange={this.handleChange} maxLength="1" className="box" />
        </div>
      )
    }
    return (
      <input type="text" onChange={this.handleChange} maxLength="1" className="box" />
    )
  }
}
