let videogames = [
    {
        name2: "",
        gender: ""
    },
    {
        name2: "",
        gender: ""
    },
]

function showVideogamesList() {
    const VIDEOGAMES_LIST = document.getElementById("videogames-list")

    let videogamesToShow = ""
    for (let i = 0; i < videogames.length; i++) {
        videogamesToShow += `
    <div>
        <h8>${videogames[i].name2}</h8>
        <p>${videogames[i].gender}</p>
    </div>
    `
    }
    VIDEOGAMES_LIST.innerHTML = videogamesToShow
}

function listenForSubmit() {
    const VIDEOGAMES_REGISTER = document.getElementById("videogames-register")
    VIDEOGAMES_REGISTER.addEventListener("submit", introduceNewVideogamesAndShow)
}

function introduceNewVideogames(e) {
    e.preventDefault()
    const NAME2 = e.target.name2.value
    const GENDER = e.target.gender.value

    videogames.push({
        name2: NAME2,
        gender: GENDER
    })
}

function introduceNewVideogamesAndShow(e) {
    introduceNewVideogames(e)
    showVideogamesList()
}

showVideogamesList()
listenForSubmit()