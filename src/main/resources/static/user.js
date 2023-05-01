function userAuthInfo() {
    const tbody = document.getElementById('user-table');
    const panel = document.getElementById("user-header");
    fetch('http://localhost:8080/user/api')
        .then((res) => res.json())
        .then((userInfo) => {
            let table_row = '';
            let roles = [];
            for (let role of userInfo.roles) {
                roles.push(" " + role.name.toString().substring(5))
            }
            table_row += `<tr>
                        <td>${userInfo.id}</div>
                        <td>${userInfo.firstname}</td>
                        <td>${userInfo.lastname}</td>
                        <td>${userInfo.age}</td>
                        <td>${userInfo.username}</td>
                        <td>${userInfo.role}</td>
                    </tr>`;
            tbody.innerHTML = table_row;
            panel.innerHTML = `<h5><b>${userInfo.username}</b> with roles: <span>${userInfo.role}</span></h5>`
        });
}

userAuthInfo()
