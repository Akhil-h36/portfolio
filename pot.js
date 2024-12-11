/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});





document.getElementById("submit-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default submission
    
    // Get values from form inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(el => el.remove());

    // Name validation
    if (!name) {
        isValid = false;
        showError("name", "Name is required.");
    } else if (name.length < 6 || name.length > 12) {
        isValid = false;
        showError("name", "Name must be between 6 and 12 characters.");
    }

    // Email validation
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!email) {
        isValid = false;
        showError("email", "Email is required.");
    } else if (!emailPattern.test(email)) {
        isValid = false;
        showError("email", "Invalid email format.");
    }

    // Message validation
    if (!message) {
        isValid = false;
        showError("message", "Message is required.");
    } else if (message.length < 6 || message.length > 250) {
        isValid = false;
        showError("message", "Message must be between 6 and 250 characters.");
    }

    // If all validations pass, proceed with submission
    if (isValid) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbzgQHhcF-LD80hLmy7kywNuQXjH9Somuv8TJUbTPqHMFcfjr7WYnmRlKVzm97YgNVCM3w/exec",
            data: $("#submit-form").serialize(),
            method: "POST",
            success: function (response) {
                alert("Form submitted successfully!");
                window.location.reload();
            },
            error: function () {
                alert("An error occurred. Please try again.");
            }
        });
    }
});

// Helper function to show error messages
function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorMessage = document.createElement("span");
    errorMessage.className = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "0.8em";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}





sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 