const first = {
  data: "",
};
const second = {
  data: {},
};

const third = {
  data: [],
};

function firstData(state = first, action) {
  switch (action.type) {
    case "CHANGE_FIRST_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

function secondData(state = second, action) {
  switch (action.type) {
    case "CHANGE_SECOND_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

function thirdData(state = third, action) {
  switch (action.type) {
    case "CHANGE_THIRD_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

export default {
  firstData,
  secondData,
  thirdData,
};
