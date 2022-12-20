var day = document.querySelector(".day")
var hour = document.querySelector(".hour")
var minute =document.querySelector(".minute")
var second = document.querySelector(".second")
setInterval(()=>{
    var currentDate = new Date()
    day.innerHTML = currentDate.getDate()
    hour.innerHTML = currentDate.getHours()
    minute.innerHTML = `${currentDate.getMinutes()<10?"0":""}${currentDate.getMinutes()}`
    second.innerHTML = `${currentDate.getSeconds()<10?"0":""}${currentDate.getSeconds()}`
},1000)



