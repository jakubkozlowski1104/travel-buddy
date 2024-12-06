package com.travelBuddy.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "trip_countries")
public class TripCountries {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "trip_id", nullable = false)
    private Trip trip;


    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "country_id", nullable = false)
    private Country country;
}
