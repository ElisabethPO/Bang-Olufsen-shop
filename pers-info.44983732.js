const container = document.getElementById('auth-forms');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});
loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});

//# sourceMappingURL=pers-info.44983732.js.map
