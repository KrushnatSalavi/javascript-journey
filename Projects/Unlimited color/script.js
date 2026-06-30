// Generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for (i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }

    return color;
};

let intervel;

const startChangingcolor = function () {
    if (!intervel) {
        intervel = setInterval(changeBacground, 1000)

    }

    function changeBacground() {
        document.body.style.backgroundColor = randomColor();

    }

}

const stopChangingcolor = function () {
    clearInterval(intervel)
    intervel = null;
}

document.querySelector('#start').addEventListener('click', startChangingcolor);
document.querySelector('#stop').addEventListener('click', stopChangingcolor);
