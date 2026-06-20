const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
console.log(body);

button.forEach(function (button) {
    console.log(button)
    button.addEventListener('click',function (e) {
        console.log(e);
        console.log(e.target)
        if(e.target.id === 'pick1'){
            body.style.backgroundColor = 'aquamarine'
        }
        else if(e.target.id === 'pick2'){
            body.style.backgroundColor = 'rgb(212, 189, 38)'
        }

        else if(e.target.id === 'pick3'){
            body.style.backgroundColor = "rgb(203, 36, 147)"
        }

       



    });
});