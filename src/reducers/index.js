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
  data: [],
};

const fifth = {
  data: [],
};

const sixth = {
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

function fifthData(state = fifth, action) {
  switch (action.type) {
    case "CHANGE_FIFTH_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

function sixthData(state = sixth, action) {
  switch (action.type) {
    case "CHANGE_SIXTH_DATA":
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
  fifthData,
  sixthData,
};
