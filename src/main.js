import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")

const colors = {
  visa: ["#436D99", "#2D57F2"],
  mastercard: ["#C69347", "#DF6F29"],
  elo: ["#29DFDF", "#2F35BC"],
  hipercard: ["#BC2F51", "#DF29D8"],
  american: ["#29DF9E", "#2F70BC"],
  default: ["black", "gray"],
}

function setCardType(type) {
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("elo")
