package com.example.demo;

import org.springframework.web.bind.annotation.*;


@RestController
public class Controller {

    @GetMapping("/api")
    public String index() {
        int vk = 0;
        for(int i=0;i<500;i++){
            for(int j=0;j<500;j++){
                for(int k=0;k<50;k++){
                    vk = k;
                }
            }
        }
        return "<span style=\"color: green\">Hello java!</span>";
    }

}