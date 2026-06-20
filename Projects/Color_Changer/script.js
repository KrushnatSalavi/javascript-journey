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
        
        }



    });
});