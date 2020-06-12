export default function filterTodos(data) {
  if (data.sixthData === "Done") {
    return data.fourthData;
  } else if (data.sixthData === "Undone") {
    return data.fifthData;
  } else if (data.sixthData === "All") {
    return data.thirdData;
  }
}
