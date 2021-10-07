const input = document.getElementByTd("input");
const container = document.getElementById("container");
const addButton = document.getElementById("add-button");
const removeButton = document.getElementById("remove-button")
let list = []

if (localStorage.list){
    list = JSON.parse(localStorage.list)

    for (const text of list){
        const card = document.createElement("div")
        card.className = "card"
        card.textContent = text
        container.append(card)
    }
}

addButton.onclick = function(){
    const text = input.value

    list.push(text)
    localStorage.list = JSON.stringify(list)

    const card = document.createElement("div")
    card.classname = "card"
    card.textContent = text
    container.append(card)

    input.value = ""
};

removeButton.onclick = function(){
    list = []
    localStorage.list = JSON.stringify(list)

    container.textContent = ""
};
