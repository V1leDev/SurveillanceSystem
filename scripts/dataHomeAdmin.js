settingsAdmin = document.getElementById('settingsAdmin')
settingsHeaderAdmin = document.getElementById('settingsHeaderAdmin')
activatehomeAdmin = document.getElementById('activateHomeAdmin')
buttonchangepwAdmin = document.getElementById('buttonchangepwAdmin')
changepwinputAdmin = document.getElementById('changepwAdmin')


activatehomeAdmin.onclick = function () {
    datadiv = document.getElementById('datadivAdmin')
    datadiv.innerHTML = ''

    datadiv.appendChild(settingsHeaderAdmin)
    datadiv.appendChild(settingsAdmin)
    changepwinputAdmin.value = ''
}

buttonchangepwAdmin.onclick = function () {
    if (changepwinputAdmin.value === '') {
        alert('New password cannot be empty')
    } else {
        $.ajax({
            type: "POST",
            url: "../php/changePassword.php",
            data: {'newPassword': changepwinputAdmin.value},
            success: function (data) {
                if (data == 1) {
                    alert('Password has been changed successfully!')
                }
                changepwinputAdmin.value = ''
            }
        });
    }
}

