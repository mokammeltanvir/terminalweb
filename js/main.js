
//* created by MokammelTanvir **//

let app = document.querySelector('.termweb_app_icon');
let terminal = document.querySelector('.wrapper');

let input = document.querySelector('#input');

app.addEventListener('click', function () {
    terminal.classList.add('display');
    terminal.classList.remove('disnone');
    app.classList.add('disnone');
    input.focus();

});
let buttons = document.querySelector('.crossIcon');
buttons.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-times-circle')) {
        terminal.classList.add('disnone');
        app.classList.add('display');
        app.classList.remove('disnone');
        input.focus();

    } else if (e.target.classList.contains('fa-window-maximize')) {
        terminal.classList.toggle('width');
        input.focus();
    }

});


let skill = document.querySelector('.skill');
let feedback = document.querySelector('.feedback');
let commandHis = document.querySelector('.commandHistory');
let abhis = document.querySelector('.abhis');
let label = document.querySelector('.label');
let about = document.querySelector('.about');
let home = document.querySelector('.home');
let conthis = document.querySelector('.conthis');
let contact = document.querySelector('.contact');


let all=document.querySelector('.all')
input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        let inp = input.value.toString();
        // console.log(inp)
        if (inp === 'skill') {
            skill.classList.add('display');
            commandHis.textContent = label.textContent + ' ' + input.value;
            // feedback.classList.remove('display');
            input.value = '';
        } else if (inp === 'home') {
            skill.classList.remove('display');
            about.classList.remove('display');
            feedback.classList.remove('display');
            home.classList.remove('disnone');
            contact.classList.remove('display');
            
            input.value = '';
        }
        else if (inp === 'clear') {
            // skill.classList.add('disnone')
            skill.classList.remove('display');
            about.classList.remove('display');
            feedback.classList.remove('display');
            home.classList.add('disnone');
            input.value = '';
            contact.classList.remove('display');


        } else if (inp === 'about') {
            about.classList.add('display');
            abhis.textContent = label.textContent + ' ' + input.value;
            // feedback.classList.remove('display');
            input.value = '';
        } else if (inp === 'contact') {
            contact.classList.add('display');
            conthis.textContent = label.textContent + ' ' + input.value;
            input.value = '';
        }
        else {
            feedback.classList.add('display');
            console.log(feedback);
            input.value = '';
        }
    }
});

let Infocus = document.querySelector('.termweb_container');
Infocus.addEventListener('click', function () {
    input.focus();
});




