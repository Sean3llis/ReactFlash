import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFlashcard, updateCurrentFlashcard } from '../reducers/flashcard';
import uuid from 'uuid/v4';

class FlashForm extends Component {
  onInputChange() {
    this.props.handleCurrentUpdate({
      clue: this.refs.clue.value,
      answer: this.refs.answer.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.handleFormSubmit({
      clue: this.refs.clue.value,
      answer: this.refs.answer.value,
      id: uuid()
    });
    this.props.handleCurrentUpdate({ clue: '', answer: '' });
    this.refs.clue.focus();
  }
  render() {
    return (
      <div className="container">
        <form className="flashform" onSubmit={this.onSubmit.bind(this)}>
          <div className="grid-x grid-padding-x">
            <div className="small-12 medium-6 cell">
              <h3 className="text-white">Clue</h3>
              <input
                ref="clue"
                type="text"
                value={this.props.currentFlashcard.clue}
                onChange={this.onInputChange.bind(this)} />
            </div>
            <div className="small-12 medium-6 cell">
              <h3 className="text-white">Answer</h3>
              <input
                ref="answer"
                type="text"
                value={this.props.currentFlashcard.answer}
                onChange={this.onInputChange.bind(this, 'lol')} />
            </div>
            <div className="small-12 cell">
              <button className="button" type="submit">submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ flashcard }) => {
  return { currentFlashcard: flashcard.currentFlashcard };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleCurrentUpdate: flashcard => {
      dispatch(updateCurrentFlashcard(flashcard))
    },
    handleFormSubmit: flashcard => dispatch(createFlashcard(flashcard))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashForm);
