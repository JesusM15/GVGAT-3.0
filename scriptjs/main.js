let animation = document.querySelectorAll(".animation");

const showScroll = () =>{
    let scrollTop = document.documentElement.scrollTop; //cantidad de scroll que hago a medida que bajo
    //aplicar esto para todos los elementos
    for (var i = 0; i<animation.length; i++){
        let animateHeight = animation[i].offsetTop; //offset detecta la alturra desde el inicio de la ventana hasta el comienzo del elemento
        if (animateHeight-280 < scrollTop){
            animation[i].style.opacity = 1;
        }
    }
}

window.addEventListener('scroll', showScroll);

const btnSend = document.getElementById("btn-send");
const password = document.querySelector(".password");
const user = document.querySelector(".user-name");
const comment = document.querySelector(".comment");




btnSend.addEventListener("click", (e) =>{
    e.preventDefault();
    if (user.value != "" && password.value != '' && comment.value != ''){
        if (user.value.length > 3 && password.value.length > 7){
            alert("Felicidades, se han enviado correctamente los datos!");
        }else{
            alert("Alguno de sus datos no los podemos tomar como validos");
            alert("Tenga presente que debe tener un nombre de usuario mayor de 3 letras");
            alert("Y una contraseña de mas de 7 digitos");
        }
    }else{
        alert("No deje campos vacios...")
    }
});

