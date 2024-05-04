const getColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215);
    let randomHexColor = "#" + randomColor.toString(16);
    console.log(randomHexColor);
    document.querySelector("body").style.backgroundColor = randomHexColor
    document.querySelector("#color-code").innerHTML = randomHexColor.toUpperCase()
}

document.querySelector("#btn").addEventListener("click",() => getColor())

getColor()