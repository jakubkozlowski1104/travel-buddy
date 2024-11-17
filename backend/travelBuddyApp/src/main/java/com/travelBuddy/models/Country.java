package com.travelBuddy.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "country_id", unique = true, nullable = false, updatable = false)
    private Long countryId;

    @Column(name = "name", nullable = false, length = 50, unique = true)
    private String name;

    @Column(name = "code", nullable = false, length = 3, unique = true)
    private String code;
}
