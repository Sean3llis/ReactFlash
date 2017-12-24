import * as ACT from '../actions';
const initialState = {
  flashcards: {
    foo: {
      clue: 'foo',
      answer: 'bar',
    },
    bar: {
      clue: 'foo2',
      answer: 'bar2',
    },
    baz: {
      clue: 'foo3',
      answer: 'foo3',
    }
  },
  currentFlashcard: {
    clue: '',
    answer: ''
  }
}

export const createFlashcard = flashcard => {
  return {
    type: ACT.FLASHCARD_CREATE,
    flashcard
  }
}

export const updateCurrentFlashcard = flashcard => {
  return {
    type: ACT.CURRENT_UPDATE,
    flashcard,
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ACT.CURRENT_UPDATE:
      return { ...state, currentFlashcard: action.flashcard }
    case ACT.FLASHCARD_CREATE:
      return {
        ...state,
        flashcards: {
          ...state.flashcards,
          [action.flashcard.id]: action.flashcard
        }
      }
    default:
      return state;
  }
}
