package com.application.infinitepi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class InfinitePiApplication {

    public static void main(String[] args) {
        SpringApplication.run(InfinitePiApplication.class, args);
    }

    @GetMapping("/")
    public static String hello() {
        return "HELLO WORLD";
    }
}
