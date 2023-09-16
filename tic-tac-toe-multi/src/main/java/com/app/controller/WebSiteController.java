package com.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// mark to accept request from localhost:3000 port. This is where frontend lies
@CrossOrigin(value="http://localhost:3000")
public class WebSiteController {
    @GetMapping(path = "/echo")
    public String echo(){
        return "echo";
    }
}