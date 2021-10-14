const memoinput = document.getElementById("memo-input");
const addbutton = document.getElementById("add-button");
const memocontainer = document.getElementById("memo-container");

//console.dir(memoinput);

addbutton.onclick = function () {
  const text = memoinput.value;
  const card = document.createElement("div");
  card.textContent = text;
  memocontainer.append(card);
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete";
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    card.remove();
  };
  card.append(deleteButton);

  return card;
};
