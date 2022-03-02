let password = "hkg2022"
const conf = document.getElementById("Conf");
var msg = document.getElementById("msg");

checkBtn.addEventListener("click", function () {
        document.getElementById("popUp").style.display = "block";
        if (passVal.value === password) {
                msg.textContent = "Welcome User X";
        }
        else {
                msg.textContent = "Wrong Password";
                passVal.focus()
                passVal.value = ""
        }

})
conf.addEventListener("click", function () {
        document.getElementById("popUp").style.display = "none";
})