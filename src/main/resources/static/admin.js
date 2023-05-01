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

function usersAll() {
    const tbody = document.getElementById("users-table")
    fetch("http://localhost:8080/admin/api/users")
        .then((res) => res.json())
        .then((usersInfo) => {
            let table_row = '';
            let roles = [];
            for (let us of usersInfo) {
                for (let role of us.roles) {
                    roles.push(" " + role.name.toString().substring(5))
                }
                table_row += `<tr>
                        <td>${us.id}</td>
                        <td>${us.firstname}</td>
                        <td>${us.lastname}</td>
                        <td>${us.age}</td>
                        <td>${us.username}</td>
                        <td>${us.role}</td>
                        <td>
                            <button href="#modalEdit${us.id}" type="button"
                                    class="btn btn-info" data-toggle="modal">Edit
                            </button>
                        </td>

                        <td>
                            <button href="#modalDelete${us.id}" type="button"
                                    class="btn btn-danger" data-toggle="modal">Delete
                            </button>
                        </td>
                    </tr>`;
            }
            tbody.innerHTML = table_row;
        });
}
usersAll()
