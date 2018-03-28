import axios from "axios";

const initialState = {
  user: {},
  isLoading: false,
  didErr: false,
  errMessage: null,
  questionNumber: 0,
  alignment: "",
  alignment2: "",
  alignment3: "",
  trueAlignment: "",
  race: "",
  training: "",
  faction: "",
  charDesc: "",
  charName: "",
  spawnWeapon: {},
  encounter: "",
  lore: ""
};

const UPDATE_QUESTION = "UPDATE_QUESTION";
const RESET_QUESTIONS = "RESET_QUESTIONS";
const UPDATE_ALIGNMENT = "UPDATE_ALIGNMENT";
const UPDATE_ALIGNMENT_TWO = "UPDATE_ALIGNMENT_TWO";
const UPDATE_ALIGNMENT_THREE = "UPDATE_ALIGNMENT_THREE";
const UPDATE_TRUE_ALIGNMENT = "UPDATE_TRUE_ALIGNMENT";
const UPDATE_RACE = "UPDATE_RACE";
const UPDATE_TRAINING = "UPDATE_TRAINING";
const UPDATE_FACTION = "UPDATE_FACTION";
const UPDATE_CHAR_DESC = "UPDATE_CHAR_DESC";
const UPDATE_CHAR_NAME = "UPDATE_CHAR_NAME";
const UPDATE_ENCOUNTER_VIEW = "UPDATE_ENCOUNTER_VIEW";
const UPDATE_LORE = "UPDATE_LORE";
const UPDATE_WEAPON = "UPDATE_WEAPON";
const UPDATE_REWARD_WEAPON = "UPDATE_REWARD_WEAPON";
const GET_USER = "GET_USER";

function reducer(state = initialState, action) {
  console.log("REDUCER HIT: Action -> ", action);
  switch (action.type) {
    case UPDATE_QUESTION:
      return Object.assign({}, state, { questionNumber: action.payload });
    case RESET_QUESTIONS:
      return Object.assign({}, state, {
        alignment: "",
        alignment2: "",
        alignment3: "",
        trueAlignment: "",
        race: "",
        training: "",
        charDesc: "",
        charName: ""
      });
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
    case UPDATE_FACTION:
      return Object.assign({}, state, { faction: action.payload });
    case UPDATE_CHAR_DESC:
      return Object.assign({}, state, { charDesc: action.payload });
    case UPDATE_CHAR_NAME:
      return Object.assign({}, state, { charName: action.payload });
    case UPDATE_ENCOUNTER_VIEW:
      return Object.assign({}, state, { encounter: action.payload });
    case UPDATE_LORE:
      return Object.assign({}, state, { lore: action.payload });
    case UPDATE_WEAPON:
      return Object.assign({}, state, { spawnWeapon: action.payload });
    case UPDATE_REWARD_WEAPON:
      return Object.assign({}, state, { spawnWeapon: action.payload });
    case `${GET_USER}_PENDING`:
      return Object.assign({}, state, { isLoading: true });
    case `${GET_USER}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });
    case `${GET_USER}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didErr: true
      });
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

export function resetQuestions() {
  return {
    type: RESET_QUESTIONS
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

export function updateFaction(faction) {
  return {
    type: UPDATE_FACTION,
    payload: faction
  };
}

export function updateCharDesc(charDesc) {
  return {
    type: UPDATE_CHAR_DESC,
    payload: charDesc
  };
}

export function updateCharName(charName) {
  return {
    type: UPDATE_CHAR_NAME,
    payload: charName
  };
}

export function encounterView(encounter) {
  return {
    type: UPDATE_ENCOUNTER_VIEW,
    payload: encounter
  };
}

export function updateLore(lore) {
  return {
    type: UPDATE_LORE,
    payload: lore
  };
}

export function updateWeapon(spawnWeapon, manufacsArr, initial) {
  let randomType = spawnWeapon[Math.floor(Math.random() * spawnWeapon.length)];
  console.log(randomType);

  let randomVar =
    randomType.variants[Math.floor(Math.random() * randomType.variants.length)];
  console.log(randomVar);

  let finalObj = {};
  let manufacObj = {};

  finalObj = Object.assign({}, randomVar, {
    prefix:
      randomVar.manufacs[Math.floor(Math.random() * randomVar.manufacs.length)]
  });

  function manuFilter(val) {
    let finalArr = [];
    for (let i = 0; i < val.length; i++) {
      if (val[i].name === finalObj.prefix) {
        finalArr.push(val[i]);
      }
    }
    return finalArr;
  }

  manufacObj = Object.assign({}, manufacObj, {
    info: manuFilter(manufacsArr)
  });

  console.log(manufacObj);
  let modifiers = manufacObj.info[0].modifiers;

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
    finalObj.range = rangeArr.slice(
      rangeArr.indexOf(randomType.stats.range) + modifiers.range,
      rangeArr.indexOf(randomType.stats.range) + modifiers.range + 1
    )[0];
  } else {
    finalObj.range = rangeArr.slice(
      rangeArr.indexOf(randomType.stats.range) +
        randomVar.range +
        modifiers.range,
      rangeArr.indexOf(randomType.stats.range) +
        randomVar.range +
        modifiers.range +
        1
    )[0];
  }

  let dmgArr = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11];

  if (!randomVar.damage) {
    finalObj.damage = dmgArr.slice(
      dmgArr.indexOf(randomType.stats.damage) + modifiers.damage,
      dmgArr.indexOf(randomType.stats.damage) + modifiers.damage + 1
    )[0];
    if ((finalObj.damage < 0.5) | (finalObj.damage === undefined)) {
      finalObj.damage = 0.5;
    }
  } else {
    finalObj.damage = dmgArr.slice(
      dmgArr.indexOf(randomType.stats.damage) +
        modifiers.damage +
        randomVar.damage,
      dmgArr.indexOf(randomType.stats.damage) +
        modifiers.damage +
        randomVar.damage +
        1
    )[0];
    if ((finalObj.damage < 0.5) | (finalObj.damage === undefined)) {
      finalObj.damage = 0.5;
    }
  }

  let rofArr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 18, 20, 22, 25, 28];

  if (!randomVar.firerate) {
    finalObj.firerate = rofArr.slice(
      rofArr.indexOf(randomType.stats.firerate) + modifiers.firerate,
      rofArr.indexOf(randomType.stats.firerate) + modifiers.firerate + 1
    )[0];
  } else {
    finalObj.firerate = rofArr.slice(
      rofArr.indexOf(randomType.stats.firerate) +
        modifiers.firerate +
        randomVar.firerate,
      rofArr.indexOf(randomType.stats.firerate) +
        modifiers.firerate +
        randomVar.firerate +
        1
    )[0];
  }
  if ((finalObj.firerate < 1) | (finalObj.firerate === undefined)) {
    finalObj.firerate = 1;
  }

  if (!randomVar.reload) {
    finalObj.reload = randomType.stats.reload - modifiers.reload;
  } else {
    finalObj.reload =
      randomType.stats.reload - modifiers.reload - randomVar.reload;
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
    finalObj.magazine = magArr[randomType.id][2 + modifiers.magazine];
  } else
    finalObj.magazine =
      magArr[randomType.id][2 + modifiers.magazine + randomVar.magazine];

  if (!randomVar.projectiles) {
    finalObj.projectiles = randomType.stats.projectiles;
  } else {
    finalObj.projectiles = randomVar.projectiles;
  }

  if (!initial) {
    finalObj.lvl =
      Math.floor(Math.random() * (11 - randomVar.lvl)) + randomVar.lvl;
  } else {
    finalObj.lvl = 1;
  }

  if (modifiers.other && randomType.other) {
    finalObj.other = randomType.other + " " + modifiers.other;
  } else if (modifiers.other) {
    finalObj.other = modifiers.other;
  }

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

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .request({ url: "/api/me" })
      .then(response => response.data)
      .catch(err => {
        console.log(`AXIOS ERR: ${err.message}`);
        return err.message;
      })
  };
}

export default reducer;
