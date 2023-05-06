INSERT INTO pp315.users (firstname, lastname, age, password, email)
VALUES ('admin', 'root', 33, '$2a$10$OYJj3pfcLsrPKxqoe7/0teaPEMC0pKF3iwUgoHoLcSG9j8YG4asSe', 'admin@pp314');

INSERT INTO pp315.users (firstname, lastname, age, password, email)
VALUES ('alex', 'Петров', 23, '$2a$10$BzNfvxXD8isfdaQ4qMx1n.4FOHOcKdzIdWQ.CuxHR.NsiBQQi8U9m', 'alex@pp314');


INSERT INTO pp315.roles (role)
VALUES ('ADMIN');

INSERT INTO pp315.roles (role)
VALUES ('USER');

INSERT INTO pp315.users_roles (user_id, role_id)
VALUES (1, 1);

INSERT INTO pp315.users_roles (user_id, role_id)
VALUES (1, 2);

INSERT INTO pp315.users_roles (user_id, role_id)
VALUES (2, 2);