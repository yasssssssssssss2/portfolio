function myMenuFunction() {
    var menu = document.getElementById("mynavmenu");
    menu.classList.toggle("active");
}


const form = document.querySelector(".form-control");
const submitBtn = form.querySelector(".form-button button");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    let name = form.querySelector(".input-field:nth-child(1)").value;
    let email = form.querySelector(".input-field:nth-child(2)").value;
    let subject = form.querySelector(".input-sujet").value;
    let message = form.querySelector("textarea").value;

    if (name && email && subject && message) {
        alert("Merci pour votre message, je reviendrai vers vous dès que possible !");
        form.reset(); 
    } else {
        alert("Veuillez remplir tous les champs !");
    }
});
