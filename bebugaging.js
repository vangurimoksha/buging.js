function login(username, password) {
    if (username == "admin" && (password == "1234")) {
        return "Login Success";
    } else {
        return "Login Failed";
    }
}

console.log(login("admin", "1234"));