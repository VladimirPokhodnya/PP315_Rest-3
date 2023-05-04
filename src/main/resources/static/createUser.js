const urlNewUser = 'http://localhost:8080/admin/api/users';
const form_addUser = document.getElementById('formForNewUser');
const role_new = document.querySelector('#rolesForCreate').selectedOptions;


async function createNewUser(event) {
    event.preventDefault();
    let roles = [];
    for (let i = 0; i < role_new.length; i++) {
        roles.push(role_new[i].value);
    }
    let method = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: form_addUser.firstname.value,
            lastname: form_addUser.lastname.value,
            age: form_addUser.age.value,
            username: form_addUser.username.value,
            password: form_addUser.password.value,

        }, {roles: roles}),

    }
    await fetch(urlNewUser, method).then(() => {
        form_addUser.reset();
        usersAll();
        $("#us_tab").click();
    });
}

form_addUser.addEventListener('submit', createNewUser);