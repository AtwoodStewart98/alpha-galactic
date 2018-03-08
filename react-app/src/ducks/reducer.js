const initialState = {
  questionNumber: 0,
  alignment: "Lawful Good",
  alignment2: "Good",
  alignment3: "Neutral",
  trueAlignment: "Neutral",
  race: "Porturuxean",
  training:
    "Military background, learned in heavy arms and battlefield tactics",
  spawnWeapon: {}
};

const UPDATE_QUESTION = "UPDATE_QUESTION";
const UPDATE_ALIGNMENT = "UPDATE_ALIGNMENT";
const UPDATE_ALIGNMENT_TWO = "UPDATE_ALIGNMENT_TWO";
const UPDATE_ALIGNMENT_THREE = "UPDATE_ALIGNMENT_THREE";
const UPDATE_TRUE_ALIGNMENT = "UPDATE_TRUE_ALIGNMENT";
const UPDATE_RACE = "UPDATE_RACE";
const UPDATE_TRAINING = "UPDATE_TRAINING";
const UPDATE_WEAPON = "UPDATE_WEAPON";

function reducer(state = initialState, action) {
  console.log("REDUCER HIT: Action -> ", action);
  switch (action.type) {
    case UPDATE_QUESTION:
      return Object.assign({}, state, { questionNumber: action.payload });
    case UPDATE_ALIGNMENT:
      return Object.assign({}, state, { alignment: action.payload });
    case UPDATE_ALIGNMENT_TWO:
      return Object.assign({}, state, { alignment2: action.payload });
    case UPDATE_ALIGNMENT_THREE:
      return Object.assign({}, state, { alignment3: action.payload });
    case UPDATE_TRUE_ALIGNMENT:
      return Object.assign({}, state, { trueAlignment: action.payload });
    case UPDATE_RACE:
      return Object.assign({}, state, { race: action.payload });
    case UPDATE_TRAINING:
      return Object.assign({}, state, { training: action.payload });
    case UPDATE_WEAPON:
      return Object.assign({}, state, { spawnWeapon: action.payload });
    default:
      return state;
  }
}

export function updateQuestionNumber(questionNumber) {
  return {
    type: UPDATE_QUESTION,
    payload: questionNumber
  };
}

export function updateAlignment(alignment) {
  return {
    type: UPDATE_ALIGNMENT,
    payload: alignment
  };
}

export function updateAlignmentTwo(alignment2) {
  return {
    type: UPDATE_ALIGNMENT_TWO,
    payload: alignment2
  };
}

export function updateAlignmentThree(alignment3) {
  return {
    type: UPDATE_ALIGNMENT_THREE,
    payload: alignment3
  };
}

export function updateTrueAlignment(alignment, alignment2, alignment3) {
  const arr = [alignment, alignment2, alignment3];
  if (
    alignment !== alignment2 &&
    alignment !== alignment3 &&
    alignment2 !== alignment3
  ) {
    return {
      type: UPDATE_TRUE_ALIGNMENT,
      payload: "Unaligned"
    };
  } else {
    const answer = arr
      .sort(
        (x, y) =>
          arr.filter(e => e === x).length - arr.filter(e => e === y).length
      )
      .pop();
    return {
      type: UPDATE_TRUE_ALIGNMENT,
      payload: answer
    };
  }
}

export function updateRace(race) {
  return {
    type: UPDATE_RACE,
    payload: race
  };
}

export function updateTraining(training) {
  return {
    type: UPDATE_TRAINING,
    payload: training
  };
}

export function updateWeapon(spawnWeapon) {
  return {
    type: UPDATE_WEAPON,
    payload: spawnWeapon
  };
}

export default reducer;
