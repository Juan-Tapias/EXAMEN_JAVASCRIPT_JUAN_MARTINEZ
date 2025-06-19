const title = document.getElementById("title")
const description = document.getElementById("description")
const place = document.getElementById("place")
const day = document.getElementById("day")
const hourStart = document.getElementById("hour-start")
const hourEnd = document.getElementById("hour-end")
const button = document.getElementById("agendar")
const h1 = document.getElementById("h1")
const agenda = document.getElementById("agenda-datos")


document.addEventListener("DOMContentLoaded", ()=>{
    let name = localStorage.getItem("name")
    h1.textContent = `Hola, ${name}`
    button.addEventListener("click", ()=>{
        if (!title.value || !description.value || !place.value || !hourStart.value || !hourEnd.value || !day.value){
            alert("Debes ingresar todos los datos")
        }else{
            const userActivity = {
                title: title.value,
                description: description.value,
                place: place.value,
                day: day.value,
                hourStart: hourStart.value,
                hourEnd: hourEnd.value
            }
            
            localStorage.setItem("userActivity",JSON.stringify(userActivity));
            const data = localStorage.getItem("userActivity")
            const dataUser = JSON.parse(data)
            const div = document.getElementById("datos")
            const newDiv = document.createElement("div")
                newDiv.classList.add("new")
                newDiv.innerHTML = `
                <h3>${dataUser.day}</h3>
                <p>Title: ${dataUser.title}</p>
                <p>Descripción: ${dataUser.description}</p>
                <p>Ubicacion: ${dataUser.place}</p>
                <p>Hora de Inicio: ${dataUser.hourStart}</p>
                <p>Hora de Fin: ${dataUser.hourEnd}</p>
                `;

            div.appendChild(newDiv)
                
            title.value = ""
            description.value = ""
            place.value = ""
            day.value = ""
            hourStart.value = ""
            hourEnd.value = ""
        }
    })


})

