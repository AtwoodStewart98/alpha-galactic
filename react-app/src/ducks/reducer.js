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
const UPDATE_REWARD_WEAPON = "UPDATE_REWARD_WEAPON";

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
    case UPDATE_REWARD_WEAPON:
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

export function updateWeapon(spawnWeapon, manufacsArr) {
  let randomType = spawnWeapon[Math.floor(Math.random() * spawnWeapon.length)];
  console.log(randomType);

  let randomVar =
    randomType.variants[Math.floor(Math.random() * randomType.variants.length)];
  console.log(randomVar);

  let finalObj = {};

  let rangeArr = [
    25,
    50,
    75,
    100,
    150,
    200,
    250,
    300,
    350,
    400,
    450,
    500,
    550,
    600,
    650,
    700,
    750,
    800,
    850,
    900,
    950,
    1000,
    1250,
    1500,
    1750,
    2000,
    2500,
    3000,
    3500,
    4000,
    4500,
    5000,
    5500,
    6000,
    6500
  ];

  if (!randomVar.range) {
    finalObj = Object.assign({}, randomVar, { range: randomType.stats.range });
  } else {
    finalObj = Object.assign({}, randomVar, {
      range: rangeArr.slice(
        rangeArr.indexOf(randomType.stats.range) + randomVar.range,
        rangeArr.indexOf(randomType.stats.range) + randomVar.range + 1
      )[0]
    });
  }

  let dmgArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11];

  if (!randomVar.damage) {
    finalObj.damage = randomType.stats.damage;
  } else {
    finalObj.damage = dmgArr.slice(
      dmgArr.indexOf(randomType.stats.damage) + randomVar.damage,
      dmgArr.indexOf(randomType.stats.damage) + randomVar.damage + 1
    )[0];
    if ((finalObj.damage < 0.5) | (finalObj.damage === undefined)) {
      finalObj.damage = 0.5;
    }
  }

  let rofArr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 18, 20, 22, 25, 28];

  if (!randomVar.firerate) {
    finalObj.firerate = randomType.stats.firerate;
  } else {
    finalObj.firerate = rofArr.slice(
      rofArr.indexOf(randomType.stats.firerate) + randomVar.firerate,
      rofArr.indexOf(randomType.stats.firerate) + randomVar.firerate + 1
    )[0];
  }

  if (!randomVar.reload) {
    finalObj.reload = randomType.stats.reload;
  } else {
    finalObj.reload = randomType.stats.reload - randomVar.reload;
  }

  let magArr = {
    AP: [8, 10, 12, 20, 30],
    RV: [5, 5, 6, 8, 10],
    MP: [10, 16, 20, 32, 50],
    SMG: [25, 30, 40, 50, 100],
    AR: [14, 18, 24, 30, 60],
    LMG: [30, 50, 80, 100, 300],
    PS: [2, 4, 6, 9, 12],
    CS: [4, 6, 6, 9, 20],
    BS: [3, 4, 5, 6, 10],
    SS: [5, 6, 8, 10, 15],
    GL: [1, 4, 5, 6, 8],
    RL: [1, 1, 1, 2, 4]
  };

  if (!randomVar.magazine) {
    finalObj.magazine = magArr[randomType.id][2];
  } else finalObj.magazine = magArr[randomType.id][2 + randomVar.magazine];

  if (!randomVar.projectiles) {
    finalObj.projectiles = randomType.stats.projectiles;
  } else {
    finalObj.projectiles = randomVar.projectiles;
  }

  finalObj.lvl =
    Math.floor(Math.random() * (11 - randomVar.lvl)) + randomVar.lvl;
  finalObj.prefix =
    randomVar.manufacs[Math.floor(Math.random() * randomVar.manufacs.length)];
  finalObj.type = randomType.id;

  return {
    type: UPDATE_WEAPON,
    payload: finalObj
  };
}

export function updateRewardWeapon(spawnWeapon) {
  let randomVal = spawnWeapon[Math.floor(Math.random() * spawnWeapon.length)];
  return {
    type: UPDATE_REWARD_WEAPON,
    payload: randomVal
  };
}

export default reducer;
