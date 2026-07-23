// ===============================
// THEME TOGGLE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if(savedTheme){

    body.classList.add(savedTheme);

    updateThemeIcon();

}

// Toggle Theme

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

        localStorage.setItem("theme","light-mode");

    }else{

        localStorage.removeItem("theme");

    }

    updateThemeIcon();

});

// Change icon

function updateThemeIcon(){

    if(body.classList.contains("light-mode")){

        themeToggle.innerHTML='<i class="fas fa-sun"></i>';

    }else{

        themeToggle.innerHTML='<i class="fas fa-moon"></i>';

    }

}