document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Имя пользователя: " + username);
    console.log("Пароль: " + password);
    // Здесь можно добавить дополнительные проверки введенных данных и выполнения дополнительных действий
});