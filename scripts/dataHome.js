settings = document.getElementById('settings')
settingsHeader = document.getElementById('settingsHeader')
activatehome = document.getElementById('activateHome')
buttonchangepw = document.getElementById('buttonchangepw')
changepwinput = document.getElementById('changepw')


activatehome.onclick = function () {
    datadiv = document.getElementById('datadiv')
    datadiv.innerHTML = ''

    datadiv.appendChild(settingsHeader)
    datadiv.appendChild(settings)
    changepwinput.value = ''
}

buttonchangepw.onclick = function () {
    if (changepwinput.value === '') {
        alert('New password cannot be empty')
    } else {
        $.ajax({
            type: "POST",
            url: "../php/changePassword.php",
            data: {'newPassword': changepwinput.value},
            success: function (data) {
                alert('Password has been changed successfully!')
            }
        });
    }
}
