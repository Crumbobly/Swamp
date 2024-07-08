
let currTabIndex = 0;

// Функция паузы
function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('register-tab').addEventListener('click', async function() {
    const leftSlide = document.querySelector('#left_slide');


    if (currTabIndex !== 1) {
        for (let i = 50; i >= 25; i--) {
            leftSlide.style.background = `linear-gradient(to bottom, var(--light-green) ${i}%, var(--light-grey) ${i}%)`;
            await pause(5);
        }
    }
    currTabIndex = 1;
});

document.getElementById('login-tab').addEventListener('click', async function() {
    const leftSlide = document.querySelector('#left_slide');

    if (currTabIndex !== 0) {
        for (let i = 25; i <= 50; i++) {
            leftSlide.style.background = `linear-gradient(to bottom, var(--light-green) ${i}%, var(--light-grey) ${i}%)`;
            await pause(5);
        }
    }
    currTabIndex = 0;
});


// Для капчи
function onSubmit(token) {
    document.getElementById("demo-form").submit();
}

document.getElementById('submit_button').addEventListener('click', function() {

    // Удаляем div с формой регистрации
    const registrationDiv = document.getElementById('formDiv');
    registrationDiv.hidden = true;

    // Показываем div с подтверждением аккаунта
    const confirmationDiv = document.getElementById('confirmationDiv');
    confirmationDiv.hidden = false;
});
