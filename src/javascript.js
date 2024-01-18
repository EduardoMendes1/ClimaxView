

const key = "2210371bb7305ee306948b842829bdb3"

function ColocarnomenaTela(dados) {
    console.log(dados)
    document.querySelector(".title-city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) +"ºC"
    document.querySelector(".state").innerHTML = dados.weather[0].description
    document.querySelector(".title-state").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".cloud").src =  `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function SearchCity(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    console.log(dados)
    ColocarnomenaTela(dados)
}

function ClickButton() {
    const cidade = document.querySelector('.input-city').value;

    SearchCity(cidade)
}