package com.travelBuddy.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
public class UserDTO {
    private String id;
    private String username;
    private String email;
    private String password; // Może być ukrywane w odpowiedziach, zależnie od wymagań
    private String bio;
    private String photoUrl;
    private String interests;
    private int age;
    private String country;
    private LocalDateTime createdAt;
    private List<String> countriesVisited; //names
}

