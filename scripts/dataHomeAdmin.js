activatehomeAdmin = document.getElementById('activateHomeAdmin')
activatehomeAdmin.onclick = function () {
    datadiv = document.getElementById('datadivAdmin')
    datadiv.innerHTML = ''

    title = document.createElement('h1')
    title.innerHTML = "Hello there Admin!"

    datadiv.appendChild(title)
}
