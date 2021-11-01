let nombre, email, clave;

    const form= document.getElementById("form")
    
    form.addEventListener("submit", (e) => {
        e.preventDefault()
        leerdatos()
    });
    
    function leerdatos (){
    
        nombre= document.getElementById("nombre").value;
        email = document.getElementById("email").value;
        clave = document.getElementById("password").value;
    
        localStorage.setItem("nombre",nombre)
        localStorage.setItem("email" ,email)
        localStorage.setItem("password",password)
    }