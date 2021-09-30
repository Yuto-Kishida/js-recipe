// button 要素と click イベント
//const alertMessage = function() {
   // alert("クリックしたね")
  //}
  
  //lertMessage() // アラートが表示される
  // イベントが発生する要素を取得する

  //練習問題１①
 const button = document.getElementById("button")

button.onclick = function() {
  alert("クリックしたね")
}
//表示された

//練習問題１②
//const button = document.getElementById("button")

//const alertMessage = function() {
//  alert("クリックしたね")
//}

//button.onclick = alertMessage()
//表示されなかった

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

 document.onkeydown = function(e){
    console.log(e.key)
}