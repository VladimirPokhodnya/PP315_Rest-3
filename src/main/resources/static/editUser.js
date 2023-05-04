const editForm = document.getElementById('formEdit');
const edit_id = document.getElementById('idEdit');
const edit_firstname = document.getElementById('firstnameEdit');
const edit_lastname = document.getElementById('lastnameEdit');
const edit_age = document.getElementById('ageEdit');
const edit_email = document.getElementById('emailEdit');
const edit_password = document.getElementById('passwordEdit');
// const delete_roles = document.getElementById('rolesForDeleting')

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
                // edit_password.value = ``;
                // edit_password.value = `${user.password}`
                // delete_roles.value = `${user.role}`
            })
    } else {
        alert(`Error, ${modalEdit.status}`)
    }
}

async function editUser() {
    alert("Edit User ...")
}