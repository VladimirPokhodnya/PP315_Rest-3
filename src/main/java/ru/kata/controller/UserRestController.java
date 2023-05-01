package ru.kata.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.model.User;
import ru.kata.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserRestController {

    private final UserService userService;

    public UserRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api")
    public ResponseEntity<User> apiGetAuthUsers() {
        User user = userService.getAuthUser();
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
