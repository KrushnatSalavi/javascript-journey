const colck = document.getElementById('clock')

setInterval(function () {
    const date = new Date();
    colck.innerHTML = date.toLocaleTimeString();

}, 1000)