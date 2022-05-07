const Theme = {
    backgroundColor: "#000E33",
    fontColor: "#F7F7F7",
    fontSize: "2.2rem"
}

window.onload = function () {
    const body = document.getElementsByTagName("body")[0]
    body.style.backgroundColor = Theme.backgroundColor
    body.style.color = Theme.fontColor

    const main = document.getElementById("main")
    main.style.fontSize = Theme.fontSize
}