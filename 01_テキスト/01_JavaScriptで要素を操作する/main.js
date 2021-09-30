// 要素を取得する
const element = document.getElementById("elementId")
console.log("「要素を取得する」で取得した要素 →", element)

// 要素を取得する - 発展：子要素を取得する
const buttons = document.getElementById("buttons")
for (const button of buttons.children) {
  button.onclick = function() {
    alert("clicked: " + button.textContent)
  }
}

// 要素を変更する - textContent
const elementTextContent = document.getElementById("element-textContent")
elementTextContent.textContent = "こんばんは"

// 要素を変更する - style
const elementStyle = document.getElementById("element-style")
elementStyle.style.fontWeight = "bold"

// 要素を変更する - className
const elementClassName = document.getElementById("element-className")
elementClassName.className = "nice-element"

// 要素を変更する - classList
const elementClassList = document.getElementById("element-classList")
elementClassList.classList.add("great-element")
element.classList.remove("nice-element")

// 要素を追加する - appendChild
const cardsContainer = document.getElementById("element-appendChild")
const card = document.createElement("div")
card.textContent = "こんばんは"
cardsContainer.appendChild(card)

// 要素を追加する - 最新の方法
const elementPrepend = document.getElementById("element-prepend")
const card1 = document.createElement("div")
card1.textContent = "おはよう"
elementPrepend.prepend(card1)

// 要素を削除する - remove
const elementRemove = document.getElementById("element-remove")
elementRemove.remove()

const elementChildRemove = document.getElementById("element-childremove")
elementChildRemove.parentNode.removeChild(elementChildRemove)

const cards = document.getElementById("cards-container")

cards.textContent = ""