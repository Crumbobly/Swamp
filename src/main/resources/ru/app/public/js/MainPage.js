document.getElementById('login-tab').addEventListener('click', function() {
    const leftSlide = document.querySelector('.left_slide');
    leftSlide.classList.toggle('changed-gradient');
});

document.getElementById('register-tab').addEventListener('click', function() {
    const leftSlide = document.querySelector('.left_slide');
    leftSlide.classList.toggle('changed-gradient-back');
});