package com.ilya.investments.user;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;




@RestController
@RequestMapping("/api/user")
public class UserController {
        private final List<User> users = new ArrayList<>();

        @GetMapping("/login")
        private String login(@RequestParam String name,
                             @RequestParam String password) {
            User userToLogin = users.stream()
                    .filter(user -> name.equals(user.getName()))
                    .findFirst()
                    .orElse(null);

            String error = "null";
            if (userToLogin != null)
            {
                if (!password.equals(userToLogin.getPassword()))
                {
                    error = "Password not correct";
                }
            }
            else
            {
                error = "User not finded";
            }

            return String.format("\"error\": \"%s\"", error);
        }

        @PostMapping("/register")
        private Boolean register(@RequestParam String name,
                                 @RequestParam String password)
        {
            users.add(new User(users.size(), name, password));

            return true;
        }


}
