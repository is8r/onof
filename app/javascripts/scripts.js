// import Onof from "onof"
import Onof from "./classes/onof.js"

document.addEventListener("DOMContentLoaded", function () {
  var onof = new Onof()
})

document.body.addEventListener('on.onof', function (e) {
  console.log(e)
})

document.body.addEventListener('off.onof', function (e) {
  console.log(e)
})
