document.getElementById("formulaire").addEventListener("submit", function(e){
    e.preventDefault();
    let firstName= document.getElementById("firstname");
    let lastName= document.getElementById("lastname");
    let eMail = document.getElementById("email");
    let message = document.getElementById("message")
    
    window.alert("Merci "+ firstName.value + " " + lastName.value + " pour ton message : " + message.value );
}
)
