package ru.kata.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kata.model.User;
import ru.kata.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminRestController {
    private final UserService userService;

    public AdminRestController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api/users")
    public ResponseEntity<List<User>> apiGetAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/api/users/{id}")
    public User show(@PathVariable("id") Long id) {
        return userService.findOne(id);
    }

//    @DeleteMapping("/api/users/{id}")
//    public ResponseEntity<HttpStatus> remove(@PathVariable("id") Long id) {
//        userService.delete(id);
//        return ResponseEntity.ok(HttpStatus.OK);
//    }


}
