const first = {
  data: "",
};

const second = {
  data: false,
};

const third = {
  data: JSON.parse(localStorage.getItem("todos")) || [
    { label: "Wash Kitchen", isComplete: false },
    { label: "Go To Theater", isComplete: false },
  ],
};

const fourth = {
  data: "All",
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

function fourthData(state = fourth, action) {
  switch (action.type) {
    case "CHANGE_FOURTH_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

export default {
  firstData,
  secondData,
  thirdData,
  fourthData,
};
