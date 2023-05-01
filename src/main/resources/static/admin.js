function userAuthInfo() {
    const panel = document.getElementById("user-header");
    fetch('http://localhost:8080/user/api')
        .then((res) => res.json())
        .then((userInfo) => {
            let roles = [];
            for (let role of userInfo.roles) {
                roles.push(" " + role.name.toString().substring(5))
            }
            panel.innerHTML = `<h5><b>${userInfo.username}</b> with roles: <span>${userInfo.role}</span></h5>`
        });
}

userAuthInfo()