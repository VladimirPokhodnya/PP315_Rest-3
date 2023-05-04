const editForm = document.getElementById('formEdit');
const edit_id = document.getElementById('idEdit');
const edit_firstname = document.getElementById('firstnameEdit');
const edit_lastname = document.getElementById('lastnameEdit');
const edit_age = document.getElementById('ageEdit');
const edit_email = document.getElementById('emailEdit');
const edit_password = document.getElementById('passwordEdit');
const edit_roles = document.getElementById('rolesForEditing')

async function editModal(id) {
    const urlEdit = 'http://localhost:8080/admin/api/users/' + id;
    let modalEdit = await fetch(urlEdit);
    if (modalEdit.ok) {
        let userData =
            await modalEdit.json().then(user => {
                edit_id.value = `${user.id}`;
                edit_firstname.value = `${user.firstname}`;
                edit_lastname.value = `${user.lastname}`;
                edit_age.value = `${user.age}`;
                edit_email.value = `${user.username}`;
                edit_password.value = ``;
                edit_roles.value = `${user.role}`
            })
    } else {
        alert(`Error, ${modalEdit.status}`)
    }
}

async function editUser() {
    let urlEdit = 'http://localhost:8080/admin/users/' + edit_id.value;
    let roles = [];
    for (let i = 0; i < editForm.roles.options.length; i++) {
        if (editForm.roles.options[i].selected) {
            roles.push(editForm.roles.options[i].value);
        }
    }
    let method = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstname: editForm.firstname.value,
            lastname: editForm.lastname.value,
            age: editForm.age.value,
            username: editForm.username.value,
            password: editForm.password.value,
            roles: roles
        })
    }

    await fetch(urlEdit, method).then(() => {
        $('#editCloseBtn').click();
        usersAll();
    })
}