const deleteForm = document.getElementById('formDelete');
const delete_id = document.getElementById('idDelete');
const delete_firstname = document.getElementById('firstnameDelete');
const delete_lastname = document.getElementById('lastnameDelete');
const delete_age = document.getElementById('ageDelete');
const delete_email = document.getElementById('emailDelete');
// const delete_password = document.getElementById('delete_password');
// const delete_roles = document.getElementById('rolesForDeleting')


async function deleteModal(id) {
    const urlDelete = 'http://localhost:8080/admin/api/users/' + id;
    let modalDelete = await fetch(urlDelete);
    if (modalDelete.ok) {
        let userData =
            await modalDelete.json().then(user => {
                delete_id.value = `${user.id}`;
                delete_firstname.value = `${user.firstname}`;
                delete_lastname.value = `${user.lastname}`;
                delete_age.value = `${user.age}`;
                delete_email.value = `${user.username}`;
                // delete_password.value = `${user.password}`
                // delete_roles.value = `${user.role}`
            })
    } else {
        alert(`Error, ${modalDelete.status}`)
    }
}

async function deleteUser() {
    deleteForm.addEventListener('submit', deletingUser);

    function deletingUser(event) {
        event.preventDefault();
        let urlDeleting = 'http://localhost:8080/admin/api/users/' + delete_id.value;
        let method = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(urlDeleting, method).then(() => {
            $('#deleteCloseBtn').click();
            usersAll();
        });
    }
}