// Constantes sing up
const sectionFatherSing = document.getElementById("singup")
const nameUser = document.getElementById("name-signup")
const passwordUser = document.getElementById("password-signup")
const emailUser = document.getElementById("email-singup")
const buttonUser = document.getElementById("button-signup")
const callLogin = document.getElementById("call-login")
// Constantes login
const buttonUserLogin = document.getElementById("button-login")
const emailUserLogin = document.getElementById("email-login")
const passwordUserLogin = document.getElementById("password-login")
const callSing = document.getElementById("call-singup")
const sectionFatherLogin = document.getElementById("login")

document.addEventListener("DOMContentLoaded", ()=>{
    buttonUser.addEventListener("click", () =>{
        if(!nameUser.value || !passwordUser.value || !emailUser.value){
            alert("Debes ingresar todos los datos")
        }else{
            localStorage.setItem("name", nameUser.value)
            localStorage.setItem("email", emailUser.value)
            localStorage.setItem("password", passwordUser.value)

            nameUser.value = ""
            passwordUser.value = ""
            emailUser.value = ""
            alert("Registro exitoso")
        }
    });

    buttonUserLogin.addEventListener("click", ()=>{
        // Variables
        let emailLocal = localStorage.getItem("email")
        let passwordLocal = localStorage.getItem("password")

        if(!passwordUserLogin.value || !emailUserLogin.value){
            const sectionFather = document.getElementById("alert");            
            if(sectionFather.style.display === "none" || sectionFather.style.display === ""){
                sectionFather.style.display = "flex"
            }
            setTimeout(()=>{
                sectionFather.style.display = "none"
            },3000)
        }else{
            if (emailUserLogin.value === emailLocal && Number(passwordUserLogin.value) === Number(passwordLocal)){
                window.location.href = "/agenda/index.html"
            }else{
                alert("Datos incorrectos")
            }
        }
    });
    callSing.addEventListener("click", ()=>{
        if(sectionFatherSing.style.display === "none" || sectionFatherSing.style.display === ""){
            sectionFatherSing.style.display = "flex"
            sectionFatherLogin.style.display = "none"
        }
    })
    callLogin.addEventListener("click", ()=>{
        if(sectionFatherLogin.style.display === "none" || sectionFatherSing.style.display === ""){
            sectionFatherLogin.style.display = "flex"
            sectionFatherSing.style.display = "none"
        }
    })
})
