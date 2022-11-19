var password = document.querySelector('.password');

password.addEventListener('keyup', function (event) {
    var input = event.target.value;
    var len = input.length;
    var blur = 10 - len * 2;
    console.log(blur);
    document.body.style.backdropFilter = `blur(${blur}px)`;
})