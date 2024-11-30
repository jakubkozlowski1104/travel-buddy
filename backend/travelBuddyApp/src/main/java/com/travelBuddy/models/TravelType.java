package com.travelBuddy.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties("trips")
@Table(name = "travel_types")
public class TravelType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false, updatable = false)
    private Long id;

    @Column(name = "name", unique = true, nullable = false, length = 70)
    private String name;

    @OneToMany(mappedBy = "travelType", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Trip> trips;
}
