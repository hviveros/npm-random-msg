// Se declara el arreglo
const messages = [
    "David",
    "Diana",
    "Maria",
    "Humberto",
    "Antonio",
    "Norma",
    "Pedro",
    "Paulina"
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
    const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }