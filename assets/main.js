document.getElementById('formulaire').addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName= document.getElementById("firstname");
    const lastName= document.getElementById("lastname");
    const eMail = document.getElementById("email");
    const message = document.getElementById("message")
    
    window.alert("Merci "+ firstName.value + " " + lastName.value + " pour ton message : " + message.value );
    }
)


