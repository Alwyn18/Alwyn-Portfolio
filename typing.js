// =====================================
// TYPING EFFECT
// =====================================

const typingElement = document.querySelector(".typing");

const professions = [

    "Java Full Stack Developer",

    "Frontend Developer",

    "UI/UX Designer",

    "Photographer",

    "Cinematographer",

    "Video Editor"

];

let professionIndex = 0;
let characterIndex = 0;

let deleting = false;

function typeEffect(){

    const current = professions[professionIndex];

    if(!deleting){

        typingElement.textContent = current.substring(0, characterIndex);

        characterIndex++;

        if(characterIndex > current.length){

            deleting = true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        typingElement.textContent = current.substring(0, characterIndex);

        characterIndex--;

        if(characterIndex < 0){

            deleting = false;

            professionIndex++;

            if(professionIndex >= professions.length){

                professionIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 45 : 100);

}

typeEffect();